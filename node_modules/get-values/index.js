'use strict';

var forOwn = require('for-own');

module.exports = function values(obj) {
  var arr = [];
  forOwn(obj, function(val, key) {
    arr.push(val);
  });
  return arr;
};
