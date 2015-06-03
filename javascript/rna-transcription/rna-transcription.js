/*
 * Copyright 2015 Bas Bossink <bas.bossink@gmail.com>
 * This code is licensed under the GNU General Public License version 3.
 */
(function () {
  'use strict';
  var toRna = function (strand) {
    var dnaToRna = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' },
      strandLength = strand.length,
      i,
      result = '';
    for (i = 0; i < strandLength; i += 1) {
      result += dnaToRna[strand.charAt(i)];
    }
    return result;
  };
  module.exports = toRna;
}());
