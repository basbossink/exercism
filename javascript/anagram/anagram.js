/*
 * Copyright 2015 Bas Bossink <bas.bossink@gmail.com>
 * This code is licensed under the GNU General Public License version 3.
 */
(function () {
  'use strict';
  var anagram = function (word) {
    var normalize = function (aWord) {
      return aWord.toLowerCase().split('').sort().join('');
    },
      loweredWord = word.toLowerCase(),
      sortedWord = normalize(word),
      matches = function () {
        var result = [], i, normalizedCandidate, candidate, candidates,
          candidatesLength;
        if (arguments.length === 1 && Array.isArray(arguments[0])) {
          candidates = arguments[0];
        } else {
          candidates = arguments;
        }
        candidatesLength = candidates.length;
        for (i = 0; i < candidatesLength; i += 1) {
          candidate = candidates[i];
          normalizedCandidate = normalize(candidate);
          if (loweredWord !== candidate.toLowerCase() &&
              sortedWord === normalizedCandidate) {
            result.push(candidate);
          }
        }
        return result;
      };
    return { matches: matches };
  };
  module.exports = anagram;
}());
