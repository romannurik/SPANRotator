/*
 * Copyright 2014 Google Inc.
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

var IS_24_HOUR_CLOCK = false;
var TRANSITION_TIME = 1000;
var DEBUG = document.location.search.indexOf('_debug') > 0;
var SPEED_MULTIPLIER = DEBUG ? 0.5 : 1;

var g_sceneName = document.location.search.replace(/^\?/, '').replace(/_debug/, '');
var g_scene = SCENES[g_sceneName];
var g_slides = [];
var g_currentSlideIndex;
var g_nextSlideTimeout;
var g_currentSlideTimeout;
var g_nextBackgroundTimeout;
var g_showNextSlideOnVisible = false;


$(document).ready(function() {
  // set up UI
  if (!document.fullscreenEnabled && !document.webkitFullscreenEnabled) {
    $('#full-screen-button').hide();
  }

  $('#full-screen-button').click(function() {
    goFullscreen();
  });

  // set up rescale
  var $body = $(document.body);
  var $slideContainer = $('#slide-container');

  function _rescale() {
    var ow = $slideContainer.width();
    var oh = $slideContainer.height();

    var ww = $body.width();
    var wh = $body.height();

    var scale = 1;

    if (ow / oh > ww / wh) {
      // vertical letterboxing
      scale = ww / ow;

      var letterBoxPlusSlideHeight = (wh + oh * scale) / 2;
      $('#letterbox1').css({
        bottom: letterBoxPlusSlideHeight,
        right: ''
      });
      $('#letterbox2').css({
        top: letterBoxPlusSlideHeight,
        left: ''
      });
    } else {
      // horizontal letterboxing
      scale = wh / oh;

      var letterBoxPlusSlideWidth = (ww + ow / oh * wh) / 2;
      $('#letterbox1').css({
        right: letterBoxPlusSlideWidth,
        bottom: ''
      });
      $('#letterbox2').css({
        left: letterBoxPlusSlideWidth,
        top: ''
      });
    }
    $slideContainer.css('transform', 'scale(' + scale + ')');
  }

  _rescale();
  $(window).resize(_rescale);

  // set up clock
  function _updateClock() {
    var date = new Date();
    var str = '';

    if (IS_24_HOUR_CLOCK) {
      str += date.getHours();
    } else {
      str += ((date.getHours() + 11) % 12 + 1);
    }

    str += ':';

    var m = date.getMinutes();
    str += ((m < 10) ? '0' : '') + m;

    $('.clock').text(str);
  }

  _updateClock();
  window.setInterval(_updateClock, 5000);

  // kick things off
  if (g_sceneName) {
    startScene();
  } else {
    showMenu();
  }
});

$(document).on('visibilitychange', function() {
  if (!document.hidden && g_showNextSlideOnVisible) {
    nextSlide();
  }
})

$(document).on('keydown', function(e) {
  if (!g_sceneName) {
    return;
  }

  var char = String.fromCharCode(e.keyCode).toLowerCase();
  if (char == 's') {
    startScene();
  } else if (char == 'e') {
    stopScene();
  } else if (char == 'f') {
    goFullscreen();
  }
});

function goFullscreen() {
  var slideContainer = $('#slide-container').get(0);
  var rfs = slideContainer.webkitRequestFullscreen || slideContainer.requestFullscreen;
  rfs.call(slideContainer);
}

function showMenu() {
  $('#letterbox1, #letterbox2').hide();
  var $menuContainer = $('#menu-container');
  $('<h1>')
      .text('Rotator Menu')
      .appendTo($menuContainer);
  var scenes = [];
  for (var id in SCENES) {
    var scene = SCENES[id];
    if ('inMenu' in scene && !scene.inMenu) {
      continue;
    }
    scene.id = id;
    scenes.push(scene);
  }

  scenes.sort(function(x, y){ return x.order - y.order; });

  for (var i = 0; i < scenes.length; i++) {
    var scene = scenes[i];
    var $item = $('<div>')
        .addClass('item')
        .appendTo($menuContainer);
    if (scene.newGroup) {
      $item.addClass('newgroup');
    }
    $('<a>')
        .attr('href', '?' + scene.id)
        .text(scene.title)
        .appendTo($item);
  }
  $menuContainer.show();

  $('#full-screen-button').hide();
}

function startScene() {
  stopScene();

  // prepare and start rotating slides
  g_slides = [];
  for (var i = 0; i < g_scene.slideInfos.length; i++) {
    var info = $.extend({}, g_scene.slideInfos[i]);
    info.nextDelay = (info.nextDelay || 0) * SPEED_MULTIPLIER;
    info.duration *= SPEED_MULTIPLIER;
    g_slides.push(info);
  }

  g_currentSlideIndex = -1;
  nextSlide();

  // start rotating background colors
  var colorIndex = -1;
  var firstColor = true;

  function nextBackground() {
    $('#slide-container').css('background', $('.slide-background').css('background'));
    $('.slide-background').remove();

    colorIndex = (colorIndex + 1) % g_scene.colors.length;
    var colors = g_scene.colors[colorIndex];

    var $slideBackground = $('<div>')
        .addClass('slide-background')
        .css('background', 'linear-gradient(to right, ' + colors[0] + ', ' + colors[1] + ')')
        .appendTo('#slide-container');

    if (firstColor) {
      $slideBackground.addClass('first');
    }

    window.setTimeout(function() {
      $slideBackground.addClass('active');
    }, 0);

    firstColor = false;
    $slideBackground.on('transitionend', nextBackground);
  }

  nextBackground();
}

function stopScene() {
  g_slides = [];

  if (g_nextBackgroundTimeout) {
    window.clearTimeout(g_nextBackgroundTimeout);
    g_nextBackgroundTimeout = 0;
  }

  if (g_nextSlideTimeout) {
    window.clearTimeout(g_nextSlideTimeout);
    g_nextSlideTimeout = 0;
  }

  if (g_currentSlideTimeout) {
    window.clearTimeout(g_currentSlideTimeout);
    g_currentSlideTimeout = 0;
  }

  $('.meta-bar').removeClass('visible');
  $('.slide').remove();
}

function nextSlide() {
  if (document.hidden) {
    g_showNextSlideOnVisible = true;
    return;
  }

  g_showNextSlideOnVisible = false;

  var previousSlide;
  if (g_currentSlideIndex >= 0) {
    previousSlide = g_slides[g_currentSlideIndex];
  }

  ++g_currentSlideIndex;
  if (g_currentSlideIndex >= g_slides.length) {
    // rotate!
    g_currentSlideIndex = 0;
  }

  $('.slide.exiting').remove();

  // exit thie current slide
  window.setTimeout(function() {
    $('.slide.active')
        .removeClass('active')
        .addClass('exiting');
  }, 0);

  // build and enter the new slide
  var slide = g_slides[g_currentSlideIndex];
  var $slide = buildSlide(slide);

  var slideStartDelay = (previousSlide ? previousSlide.nextDelay || 250 : 250);

  if (g_currentSlideTimeout) {
    window.clearTimeout(g_currentSlideTimeout);
  }

  g_currentSlideTimeout = window.setTimeout(function() {
    $slide.trigger('becameactive');
    $slide.addClass('active');
    $('.meta-bar').toggleClass('visible', ('metaBar' in slide ? slide.metaBar : true));
    g_currentSlideTimeout = 0;
  }, slideStartDelay);

  if (g_nextSlideTimeout) {
    window.clearTimeout(g_nextSlideTimeout);
  }

  g_nextSlideTimeout = window.setTimeout(nextSlide, slideStartDelay + slide.duration);
}

function buildSlide(slide) {
  var $slide = $('<div>')
      .addClass('slide')
      .addClass('type-' + slide.type)
      .appendTo('#slide-container');

  switch (slide.type) {
    case 'intro':
      $slide.html('<video src="images/Span_RotatorLogo_SIZED_JS_v001.webm" autoplay>');
      $slide.find('video').on('playing', function() {
        $(this).addClass('playing');
      });
      break;

    case 'largetext':
    case 'smalltext':
      var text = slide.text;
      if (slide.textChoices) {
        text = slide.textChoices[Math.floor(Math.random() * slide.textChoices.length)];
      }

      if (!Array.isArray(text)) {
        text = [text];
      }
      $('<div>')
          .addClass('text-line ' + (slide.type == 'smalltext' ? 'small' : ''))
          .html(text.join('<br>').replace(/\n/g, '<br>'))
          .appendTo($slide);
      break;

    case 'icons':
      // randomly pick 3 icons
      var icons = slide.icons.slice();
      while (icons.length > 3) {
        icons.splice(Math.floor(Math.random() * icons.length), 1);
      }

      var i = 0;
      icons.forEach(function(icon) {
        var $icon = $('<div>')
            .addClass('icon')
            .data('delay', i * 1400 * SPEED_MULTIPLIER)
            .html('<video src="images/' + icon + '.webm?' + Math.random() + '">')
            .appendTo($slide);
        ++i;
      });
      $slide.on('becameactive', function() {
        $slide.find('.icon').each(function() {
          var $icon = $(this);
          $icon.find('video').on('playing', function() {
            $(this).addClass('playing');
          });
          window.setTimeout(function() {
            $icon.addClass('active');
            $icon.find('video').get(0).play();
          }, $icon.data('delay') || 0);
        });
      });
      break;

    case 'schedule':
      // render location (supertitle)
      $('<div>').addClass('text-line location').html(slide.location).appendTo($slide);

      // render schedule items
      if (!Array.isArray(slide.content)) {
        slide.content = [slide.content];
      }
      slide.content.forEach(function(scheduleItem) {
        // render title lines
        if (!Array.isArray(scheduleItem.title)) {
          scheduleItem.title = [scheduleItem.title];
        }
        $('<div>')
            .addClass('text-line title')
            .html(scheduleItem.title.join('<br>').replace(/\n/g, '<br>'))
            .appendTo($slide);

        // render subtitle lines
        if (!Array.isArray(scheduleItem.subtitle)) {
          scheduleItem.subtitle = [scheduleItem.subtitle];
        }
        $('<div>')
            .addClass('text-line subtitle')
            .html(scheduleItem.subtitle.join('<br>').replace(/\n/g, '<br>'))
            .appendTo($slide);
      });
      break;
  }

  return $slide;
}