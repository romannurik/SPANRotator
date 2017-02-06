/*
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const uiHelpers = require('./uihelpers');
const dataLoader = require('./dataloader');

const SCENE_NAME = document.location.search.replace(/^\?|_debug/g, '');
const IS_24_HOUR_CLOCK = !!SCENE_NAME.match(/TYO/);

const NUM_COLOR_PALETTES = 4;
const NUM_BACKGROUND_SHAPE_ANIMATIONS = 5;
const BACKGROUND_CHANGE_DELAY = 500; // change colors and shapes 500ms after slide change
const BACKGROUND_SHAPE_CHANGE_INTERVAL = 30000; // ensure shapes change at least once every 30 sec

let g_slides = [];
let g_data = null;

let useLocalData = true;

/**
 * Bootstrap
 */
$(document).ready(() => {
  setupKeyboard();
  setupClockUpdater();
  uiHelpers.setupFullscreenButton();
  uiHelpers.setupRescaling();

  let $loading = $('.loading');
  $loading.addClass('is-visible');

  if(!useLocalData) {
    dataLoader.onData(data => {
      loadScene(data)
    });
  } else {
    let backupdata = require('./backupdata')();
    loadScene(backupdata)
  }

  function loadScene(data) {
    let $loading = $('.loading');
    $loading.removeClass('is-visible');

    // called any time there's a data change
    console.log((g_data ? 'Reloaded' : 'Loaded') + ' scene data');
    g_data = data;

    let scenes = g_data[g_data.config.scenesKey || 'scenes'];
    if (SCENE_NAME) {
      startScene(scenes[SCENE_NAME]);
    } else {
      uiHelpers.showSceneMenu(scenes);
    }
  }
});


/**
 * Keyboard handler
 */
function setupKeyboard() {
  $(document).on('keydown', e => {
    if (!SCENE_NAME) {
      return;
    }

    let char = String.fromCharCode(e.keyCode).toLowerCase();
    if (char == 'n') {
      nextSlide();
    } else if (char == 'r') {
      g_slides.current = -1;
      nextSlide();
    } else if (char == 'p') {
      pauseScene();
    } else if (char == 'f') {
      uiHelpers.goFullscreen();
    }
  });
}


/**
 * Updates the clock every second. A little hacky, as this is tied to
 * _swapTextBlock in renderSlide.
 */
function setupClockUpdater() {
  setInterval(() => {
    let clockStr = uiHelpers.clockTime(IS_24_HOUR_CLOCK);
    let $clockContent = $('.clock .block-content');
    if ($clockContent.length) {
      $clockContent.text(clockStr);
      $('.clock').data('last-text', clockStr);
    } else {
      $('.clock').data('last-text', null);
    }
  }, 1000);
}


/**
 * Computes the default duration for the given slide.
 */
function defaultSlideDuration(slide) {
  switch (slide.layout) {
    case 'speaker':
      return defaultDurationForSlideWithText(
          slide.speakerName, slide.speakerTitle, slide.speakerSocial);

    case 'schedule':
      return defaultDurationForSlideWithText(
          slide.scheduleText, slide.scheduleWhereWhen, slide.scheduleWho);

    case 'intro':
      return 0;

    case 'default':
    default:
      return defaultDurationForSlideWithText(slide.text);
  }
}


/**
 * Computes the default duration (in milliseconds) for a slide
 * with the given text contents.
 */
function defaultDurationForSlideWithText(...text) {
  let numChars = text
      .map(s => (s || '').length)
      .reduce((x, y) => x + y, 0);
  return 3000 + Math.ceil(numChars / 50) * 2000;
}


/**
 * Kicks off the current scene, stopping any existing scene.
 */
function startScene(scene) {
  if (!scene) {
    console.error('Unknown scene');
    return;
  }

  $('#slide-container').attr('data-palette-group', scene.paletteGroup);

  // prepare the list of slides, filling in any missing data
  g_slides = Object.keys(scene.slides)
      .sort()
      .filter(key => !scene.slides[key].disabled)
      .map(key => {
        let slide = scene.slides[key];
        slide.layout = slide.layout || 'default';
        slide.duration = slide.duration || defaultSlideDuration(slide);
        return slide;
      });

  // start rotating slides once all content is preloaded
  let $loading = $('.loading');
  $loading.addClass('is-visible');
  preloadResources()
      .then(() => {
        $loading.removeClass('is-visible');
        g_slides.current = -1;
        nextSlide();
      })
      .catch(e => {
        $loading.text('Loading error. See console for details');
      });
}


/**
 * Preload images and videos referenced in slides.
 *
 * Also sets a video slide's duration if it doesn't have one set.
 */
function preloadResources() {
  let preloadPromises = [];
  g_slides.forEach(slide => {
    switch (slide.layout) {
      case 'speaker': {
        let url = slide.speakerImage;
        if (url) {
          preloadPromises.push(new Promise((resolve, reject) => {
            $('<img>')
                .attr('src', url)
                .on('load', () => {
                  console.log(`Loaded resource ${url}`);
                  resolve();
                })
                .on('error', () => {
                  console.error(`Failed to load ${url}`);
                  reject();
                });
          }));
        }
        break;
      }

      case 'intro': {
        let url = slide.introClip;
        if (url) {
          preloadPromises.push(new Promise((resolve, reject) => {
            $('<video>')
                .attr('src', url)
                .on('canplaythrough', function() {
                  console.log(`Loaded resource ${url}`);
                  slide.duration = slide.duration || (1000 * $(this).get(0).duration);
                  resolve();
                })
                .on('error', () => {
                  console.error(`Failed to load ${url}`);
                  reject();
                });
          }));
        }
        break;
      }
    }
  });

  return Promise.all(preloadPromises);
}


/**
 * Pauses the currently playing scene, if playing
 */
function pauseScene() {
  if (nextSlide.timeout) {
    clearTimeout(nextSlide.timeout);
    delete nextSlide.timeout;
    clearTimeout(nextBackgroundShape.timeout);
    delete nextBackgroundShape.timeout;
  }
}


/**
 * Shows the next slide in the current scene, and queues up
 * the slide after that.
 */
function nextSlide() {
  // clear any pending next slide calls
  if (nextSlide.timeout) {
    clearTimeout(nextSlide.timeout);
    delete nextSlide.timeout;
  }

  if (!g_slides.length) {
    return;
  }

  // if the document is hidden, show the next slide when it becomes visible again
  if (document.hidden) {
    $(document).one('visibilitychange', () => {
      if (!document.hidden) {
        nextSlide();
      }
    });
    return;
  }

  // clean up old, already exited slide contents
  $('#slide-container .exiting').remove();

  // build and render/enter the next slide
  g_slides.current = (g_slides.current + 1) % g_slides.length;
  let isFirstSlideInScene = (g_slides.current == 0);
  let slide = g_slides[g_slides.current];
  renderSlide(slide);

  // queue up the next background color and shape
  setTimeout(() => {
    updateColorPalette({
      forcePalette: slide.forcePalette,
      advanceToNext: isFirstSlideInScene
    });

    nextBackgroundShape();
  }, BACKGROUND_CHANGE_DELAY);

  // queue up the next slide
  nextSlide.timeout = setTimeout(() => nextSlide(), slide.duration);
}


let g_paletteIndex = -1;
let g_shapeAnimationIndex = -1;


/**
 * Updates the current color palette, optionally forcing a given palette key and optionally
 * advancing the counter for the current numbered palette.
 */
function updateColorPalette(options) {
  if (options.advanceToNext) {
    g_paletteIndex = (g_paletteIndex + 1) % NUM_COLOR_PALETTES;
  }

  let palette = options.forcePalette || g_paletteIndex;
  $('#slide-container').attr('data-palette', palette);
}


/**
 * Switches to the next background shape, using a transition.
 * This also schedules another background shape rotation if not called again
 * within 30 seconds (except if the scene is paused).
 */
function nextBackgroundShape() {
  ++g_shapeAnimationIndex;
  g_shapeAnimationIndex = g_shapeAnimationIndex % NUM_BACKGROUND_SHAPE_ANIMATIONS;
  $('#primitive-animation-desktop').attr('class', 'animation-desktop-' + g_shapeAnimationIndex);

  if (nextBackgroundShape.timeout) {
    clearTimeout(nextBackgroundShape.timeout);
  }

  let changeInterval = BACKGROUND_SHAPE_CHANGE_INTERVAL;
  if (g_slides.length &&
      'current' in g_slides &&
      g_slides.current >= 0 &&
      g_slides[g_slides.current].shapeChangeInterval) {
    changeInterval = Number(g_slides[g_slides.current].shapeChangeInterval);
  }

  nextBackgroundShape.timeout = setTimeout(
      () => nextBackgroundShape(),
      changeInterval);
}


/**
 * Force the browser to compute pre-transition properties for the given
 * element(s), ensuring transitions are run.
 *
 * Call this *before* setting CSS properties on the element(s).
 */
function ensureTransition($sel) {
  $sel.each((i, el) => $(el).css('width'));
  return $sel;
}


/**
 * Renders the given slide, trigger animations from the current slide
 * if applicable.
 */
function renderSlide(slide) {
  const $slideContainer = $('#slide-container');
  const $clock = $slideContainer.find('.clock');
  const $metaBar = $slideContainer.find('.meta-bar');
  const $introVideo = $slideContainer.find('.intro-video');
  const $slideContent = $slideContainer.find('.slide-content');
  const $horizontalRule = $slideContainer.find('.horizontal-rule');
  const $smallText = $slideContainer.find('.small-text');

  if (slide.layout == 'intro') {
    $introVideo.attr('src', slide.introClip);
    $introVideo.get(0).currentTime = 0;
    $introVideo.get(0).play();
    $introVideo.one('playing', () => $introVideo.addClass('playing'));
  } else {
    $introVideo.removeClass('playing');
  }

  let stagger = 0;

  if (slide.layout == 'intro' || slide.layout == 'empty') {
    _swapTextBlock($metaBar, null, {stagger:0});
    _swapTextBlock($clock, null, {stagger:0});
    ensureTransition($horizontalRule).removeClass('active');

    $slideContent.find('.content-group').removeClass('active').addClass('exiting');
    $slideContent.find('.text-block').each((i, el) => _swapTextBlock($(el), null, {stagger:1}));
    $slideContent.find('.image-block').each((i, el) => _swapImageBlock($(el), null, {stagger:1}));

  } else {
    _swapTextBlock($metaBar, g_data.config.metabarText, {stagger:0});
    _swapTextBlock($clock, uiHelpers.clockTime(IS_24_HOUR_CLOCK), {stagger:0});
    ensureTransition($horizontalRule).addClass('active');

    $slideContent.find('.content-group').removeClass('active').addClass('exiting');
    $slideContent.find('.text-block').each((i, el) => _swapTextBlock($(el), null, {stagger:1}));
    $slideContent.find('.image-block').each((i, el) => _swapImageBlock($(el), null, {stagger:1}));

    stagger = 1;

    _swapTextBlock($smallText, slide.layout == 'smalltext' ? slide.text : null, {stagger:1});

    let $newContentGroup = $('<div>')
        .addClass('content-group')
        .addClass('active')
        .appendTo($slideContent);

    switch (slide.layout) {
      case 'default':
        _newTextBlock($newContentGroup, 'text-block-default', slide.text);
        break;

      case 'speaker':
        _newTextBlock($newContentGroup, 'text-block-speaker-name', slide.speakerName);
        _newTextBlock($newContentGroup, 'text-block-speaker-title', slide.speakerTitle);
        _newTextBlock($newContentGroup, 'text-block-speaker-social', slide.speakerSocial);
        _newImageBlock($newContentGroup, 'image-block-speaker-image', slide.speakerImage);
        break;

      case 'schedule':
        _newTextBlock($newContentGroup, 'text-block-schedule-text', slide.scheduleText);
        _newTextBlock($newContentGroup, 'text-block-schedule-where-when', slide.scheduleWhereWhen);
        _newTextBlock($newContentGroup, 'text-block-schedule-who', slide.scheduleWho);
        break;
    }
  }

  /**
   * Helper for creating new text blocks
   */
  function _newTextBlock($targetContentGroup, className, text) {
    let $block = $('<div>')
        .addClass('text-block')
        .addClass(className)
        .appendTo($targetContentGroup);
    _swapTextBlock($block, text);
  }

  /**
   * Helper for creating new image blocks
   */
  function _newImageBlock($targetContentGroup, className, src) {
    let $block = $('<div>')
        .addClass('image-block')
        .addClass(className)
        .appendTo($targetContentGroup);
    _swapImageBlock($block, src);
  }

  /**
   * Helper for transitioning a text block
   */
  function _swapTextBlock($el, text, options) {
    _swapBlock($el, jQuery.extend({
      shouldCancel: () => $el.data('last-text') == text,
      shouldSet: () => !!text,
      setter: $content => $content.html(text.replace(/\|/g, '<br>'))
    }, options));
    $el.data('last-text', text);
  }

  /**
   * Helper for transitioning an image block.
   */
  function _swapImageBlock($el, src, options) {
    _swapBlock($el, jQuery.extend({
      shouldCancel: () => $el.find('img').attr('src') == src,
      shouldSet: () => !!src,
      setter: $content => $content.empty().append($('<img>').attr('src', src))
    }, options));
  }

  /**
   * Internal helper for transitioning a text or image block
   */
  function _swapBlock($el, options) {
    options = options || {};
    if (options.shouldCancel && options.shouldCancel()) {
      return;
    }

    let thisStagger;
    if ('stagger' in options) {
      thisStagger = options.stagger;
    } else {
      thisStagger = stagger;
      ++stagger;
    }

    ensureTransition($el.find('.block-content'))
        .addClass('exiting')
        .removeClass('active')
        .attr('data-stagger', thisStagger);
    if (options.shouldSet()) {
      let $newContent = $('<div>')
          .addClass('block-content')
          .attr('data-stagger', thisStagger)
          .appendTo($el);
      options.setter($newContent);
      ensureTransition($newContent).addClass('active');
    }
  }
}
