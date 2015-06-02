/*
 * Copyright 2015 Bas Bossink <bas.bossink@gmail.com>
 * This code is licensed under the GNU General Public License version 3.
 */
(function () {
  'use strict';
  var anagram = function (word) {
    var loweredWord = word.toLowerCase(),
      normalize = function (aWord) {
        return aWord.toLowerCase().split('').sort().join('');
      },
      isFirstArgumentArray = function (argumentArray) {
        return argumentArray.length === 1 &&
          Array.isArray(argumentArray[0]);
      },
      normalizedWord = normalize(word),
      isAnagram = function (possibleCandidate) {
        return loweredWord !== possibleCandidate.toLowerCase() &&
          normalizedWord === normalize(possibleCandidate);
      },
      matches = function () {
        var i, result = [],
          candidates = isFirstArgumentArray(arguments) ?  arguments[0] :
              arguments,
          candidatesLength = candidates.length;
        for (i = 0; i < candidatesLength; i += 1) {
          if (isAnagram(candidates[i])) {
            result.push(candidates[i]);
          }
        }
        return result;
      };
    return { matches: matches };
  };
  module.exports = anagram;
}());
