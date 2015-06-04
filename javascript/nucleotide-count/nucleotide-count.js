
/*
 * Copyright 2015 Bas Bossink <bas.bossink@gmail.com>
 * This code is licensed under the GNU General Public License version 3.
 */
(function () {
  'use strict';
  var dna = function (strand) {
    strand = strand || '';

    var count = function (nucleotide) {
      return strand.split('').filter(function (element) {
        return element === nucleotide;
      }).length;
    },

      histogram = function () {
        return [ 'A', 'C', 'G', 'T' ].reduce(function (prev, curr) {
          prev[curr] = count(curr);
          return prev;
        }, {});
      };

    if (!/^[ACGT]*$/.test(strand)) {
      throw new Error("Invalid strand");
    }
    return { count: count, histogram: histogram };
  };
  module.exports = dna;
}());
