
/*
 * Copyright 2015 Bas Bossink <bas.bossink@gmail.com>
 * This code is licensed under the GNU General Public License version 3.
 */
(function () {
  'use strict';
  var dna = function (strand) {
    strand = strand || '';
    var nucleotides = [ 'A', 'C', 'G', 'T' ],
      strandLength = strand.length,
      numberOfNucleotides = nucleotides.length,
      count = function (nucleotide) {
        var index = 0, foundIndex, result = 0;
        do {
          foundIndex = strand.indexOf(nucleotide, index);
          if (foundIndex >= index) {
            result += 1;
            index = foundIndex + 1;
          } else {
            break;
          }
        } while (index < strandLength);

        return result;
      },
      histogram = function () {
        var hist = {}, i;
        for (i = 0; i < numberOfNucleotides; i += 1) {
          hist[nucleotides[i]] = count(nucleotides[i]);
        }
        return hist;
      },
      isNucleotide = function (candidate) {
        return (nucleotides.indexOf(candidate) !== -1);
      },
      containsOnlyNucleotides = function () {
        var result = true, i = 0;
        while (i < strandLength && result) {
          result = isNucleotide(strand[i]);
          i += 1;
        }
        return result;
      };
    if (!containsOnlyNucleotides()) {
      throw new Error("Invalid strand");
    }
    return { count: count, histogram: histogram };
  };
  module.exports = dna;
}());
