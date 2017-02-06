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

/**
 * Sets up the fullscreen button.
 */
exports.setupFullscreenButton = () => {
  if (!document.fullscreenEnabled && !document.webkitFullscreenEnabled) {
    $('#full-screen-button').hide();
  }

  $('#full-screen-button').click(() => exports.goFullscreen());
};

/**
 * Enters fullscreen mode.
 */
exports.goFullscreen = () => {
  let slideContainer = $('#slide-container').get(0);
  let rfs = slideContainer.webkitRequestFullscreen || slideContainer.requestFullscreen;
  rfs.call(slideContainer);
};

/**
 * Shows the scene menu UI.
 */
exports.showSceneMenu = scenes => {
  $('#letterbox1, #letterbox2').hide();
  let $menuContainer = $('#menu-container');

  $('#menu-container').empty();
  $('<h1>')
      .text('Rotator Menu')
      .appendTo($menuContainer);
  let sceneArr = [];
  for (let id in scenes) {
    let scene = scenes[id];
    if ('hideInMenu' in scene && scene.hideInMenu) {
      continue;
    }
    scene.id = id;
    sceneArr.push(scene);
  }

  sceneArr.sort(function(x, y){ return x.order - y.order; });

  sceneArr.forEach(scene => {
    let $item = $('<div>')
        .addClass('item')
        .appendTo($menuContainer);
    if (scene.newGroup) {
      $item.addClass('newgroup');
    }
    $('<a>')
        .attr('href', '?' + scene.id)
        .text(scene.title)
        .appendTo($item);
  });

  $menuContainer.show();

  $('#full-screen-button').hide();
};

/**
 * One-time setup for rescaling and letterboxing to fit screen.
 */
exports.setupRescaling = () => {
  let $body = $(document.body);
  let $slideContainer = $('#slide-container');
  _rescale();
  $(window).resize(_rescale);

  // helper
  function _rescale() {
    let ow = $slideContainer.width();
    let oh = $slideContainer.height();

    let ww = $body.width();
    let wh = $body.height();

    let scale = 1;

    if (ow / oh > ww / wh) {
      // vertical letterboxing
      scale = ww / ow;

      let letterBoxPlusSlideHeight = (wh + oh * scale) / 2;
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

      let letterBoxPlusSlideWidth = (ww + ow / oh * wh) / 2;
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
};

/**
 * Gets the currently displayed clock time.
 */
exports.clockTime = is24h => {
  let date = new Date();
  let str = '';

  if (is24h) {
    str += date.getHours();
  } else {
    str += ((date.getHours() + 11) % 12 + 1);
  }

  str += ':';

  let m = date.getMinutes();
  str += ((m < 10) ? '0' : '') + m;
  return str;
};
