/*
 * Copyright 2015 Bas Bossink <bas.bossink@gmail.com>
 * This code is licensed under the GNU General Public License version 3.
 */
(function () {
  'use strict';
  var toRna = function (strand) {
    var dnaToRna = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' };
    return strand.split('').reduce(function (prev, curr) {
      return prev + dnaToRna[curr];
    }, '');
  };
  module.exports = toRna;
}());
