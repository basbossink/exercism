/*
 * Copyright 2015 Bas Bossink <bas.bossink@gmail.com>
 * This code is licensed under the GNU General Public License version 3.
 */
(function () {
  'use strict';
  var compute = function (first, second) {
    var firstLength = first.length, secondLength = second.length, result = 0,
      i;
    if (firstLength !== secondLength) {
      throw new Error('DNA strands must be of equal length.');
    }
    for (i = 0; i < firstLength; i += 1) {
      if (first[i] !== second[i]) {
        result += 1;
      }
    }
    return result;
  };
  module.exports.compute = compute;
}());
