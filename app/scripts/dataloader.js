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

const registeredCallbacks = [];
let data = null;

exports.onData = callback => {
  registeredCallbacks.push(callback);
  if (data) {
    callback(data);
  }
};

firebase.database().ref().on('value', snapshot => {
  data = snapshot.val();
  window.localStorage.SPANDATA = JSON.stringify(snapshot.val());
  registeredCallbacks.forEach(c => c(data));
}, err => {
  console.error(err);
  if (window.localStorage.SPANDATA) {
    console.warn('Using cached data');
    data = JSON.parse(window.localStorage.SPANDATA);
    registeredCallbacks.forEach(c => c(data));
  }
});
