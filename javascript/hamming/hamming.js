/*
 * Copyright 2015 Bas Bossink <bas.bossink@gmail.com>
 * This code is licensed under the GNU General Public License version 3.
 */
(function () {
  'use strict';
  var compute = function (first, second) {
    if (first.length !== second.length) {
      throw new Error('DNA strands must be of equal length.');
    }
    return first.split('').reduce(function (prev, curr, i) {
      return prev + (curr !== second.charAt(i) ? 1 : 0);
    }, 0);
  };
  module.exports.compute = compute;
}());
