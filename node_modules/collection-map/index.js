/*!
 * collection-map <https://github.com/jonschlinkert/collection-map>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isObject = require('is-plain-object');
var iterator = require('make-iterator');
var values = require('get-values');
var map = require('arr-map');

module.exports = function(collection, cb, thisArg) {
  cb = iterator(cb, thisArg);
  if (isObject(collection) && !collection.length) {
    collection = values(collection);
  }
  return map(collection, function (val, key, arr) {
    return cb(val, key, arr);
  });
};
