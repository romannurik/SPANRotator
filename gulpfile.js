/*
 * Copyright 2015 Google Inc.
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

// Include Gulp & Tools We'll Use
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var runSequence = require('run-sequence');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var bower = require('gulp-bower');
var exclude = require('gulp-ignore').exclude;
var reload = browserSync.reload;

var AUTOPREFIXER_BROWSERS = [
  'chrome >= 50',
];

var DEV_MODE = false;

function errorHandler(error) {
  console.error(error.stack);
  this.emit('end'); // http://stackoverflow.com/questions/23971388
}

// Minify JS
gulp.task('scripts', function () {
  return browserify('./app/scripts/rotator.js', {
        debug: true, // debug generates sourcemap
        basedir: '.',
        paths: [
          './app/scripts/'
        ]
      })
      .transform('babelify', {presets: ['es2015']})
      .bundle()
      .on('error', errorHandler)
      .pipe(source('rotator.js'))
      .pipe(buffer())
      .pipe(gulp.dest('.tmp/scripts'))
      .pipe($.if(!DEV_MODE, $.uglify({
        mangle:false
      })))
      .pipe(gulp.dest('dist/scripts'));
});

// Bower
gulp.task('bower', function() {
  return bower('.tmp/lib')
      .pipe(exclude('**/README.md'))
      .pipe(exclude('**/test/**'))
      .pipe(exclude('**/tests/**'))
      .pipe(exclude('**/demos/**'))
      .pipe(exclude('**/demo.html'))
      .pipe(exclude('**/bower.json'))
      .pipe(exclude('**/.bower.json'))
      .pipe(gulp.dest('dist/lib'));
});

// Optimize media
gulp.task('media', function () {
  return gulp.src('app/media/**/*')
    // .pipe($.cache($.imagemin({
    //   progressive: true,
    //   interlaced: true
    // })))
    .pipe(gulp.dest('dist/media'))
    .pipe($.size({title: 'media'}));
});

// Copy All Files At The Root Level (app) and lib
gulp.task('copy', function () {
  return gulp.src([
    'app/*',
    '!app/*.html',
  ], {
    dot: true
  }).pipe(gulp.dest('dist'))
    .pipe($.size({title: 'copy'}));
});

// Libs
gulp.task('lib', function () {
  return gulp.src([
    'app/lib/**/*'
  ], {
    dot: true
  }).pipe(gulp.dest('dist/lib'))
    .pipe($.size({title: 'lib'}));
});

// Copy Web Fonts To Dist
gulp.task('fonts', function () {
  return gulp.src(['app/fonts/**'])
    .pipe(gulp.dest('dist/fonts'))
    .pipe($.size({title: 'fonts'}));
});

// Compile and Automatically Prefix Stylesheets
gulp.task('styles', function () {
  // For best performance, don't add Sass partials to `gulp.src`
  return $.rubySass([
      'app/styles/*.scss',
      'app/styles/**/*.css'
    ], {
      style: 'expanded',
      precision: 10
    })
    .pipe($.changed('styles', {extension: '.scss'}))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('.tmp/styles'))
    // Concatenate And Minify Styles
    .pipe($.if(!DEV_MODE, $.if('*.css', $.csso())))
    .pipe(gulp.dest('dist/styles'))
    .pipe($.size({title: 'styles'}));
});

// Scan Your HTML For Assets & Optimize Them
gulp.task('html', function () {
  return gulp.src('app/**/*.html')
    .pipe($.if('*.html', $.minifyHtml({empty:true})))
    .pipe(gulp.dest('dist'))
    .pipe($.size({title: 'html'}));
});

// Clean Output Directory
gulp.task('clean', function() {
  del(['.tmp', 'dist']);
  $.cache.clearAll();
});

// Watch Files For Changes & Reload
gulp.task('serve', ['styles', 'scripts', 'bower'], function () {
  DEV_MODE = true;

  browserSync({
    notify: false,
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: ['.tmp', 'app']
  });

  gulp.watch(['app/**/*.html'], reload);
  gulp.watch(['app/styles/**/*.{scss,css}'], ['styles', reload]);
  gulp.watch(['app/scripts/**/*.js'], ['scripts', reload]);
  gulp.watch(['app/media/**/*'], reload);
});

// Build and serve the output from the dist build
gulp.task('serve:dist', ['default'], function () {
  browserSync({
    notify: false,
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: 'dist'
  });
  return gulp.src('app/scripts/firebase.js')
    .pipe(gulp.dest('dist/scripts'));
});

// Build Production Files, the Default Task
gulp.task('default', ['clean'], function (cb) {
  runSequence('styles',
      ['scripts', 'bower', 'html', 'media', 'fonts', 'lib', 'copy'],
      cb);
});

// Load custom tasks from the `tasks` directory
try { require('require-dir')('tasks'); } catch (err) {}
