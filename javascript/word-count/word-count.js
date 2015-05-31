/*
 * Copyright 2015 Bas Bossink <bas.bossink@gmail.com>
 * This code is licensed under the GNU General Public License version 3.
 */
(function () {
  'use strict';
  var words = function (input) {
    var split = input.split(/\s+/), counts = {}, word, i = 0,
      numberOfWords = split.length;
    for (i = 0; i < numberOfWords; i += 1) {
      word = split[i];
      if (Object.prototype.hasOwnProperty.call(counts, word)) {
        counts[word] += 1;
      } else {
        counts[word] = 1;
      }
    }
    return counts;
  };
  module.exports = words;
}());
