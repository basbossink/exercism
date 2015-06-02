/*
 * Copyright 2015 Bas Bossink <bas.bossink@gmail.com>
 * This code is licensed under the GNU General Public License version 3.
 */
(function () {
  'use strict';
  var newline = '\n',
    verse = function (index) {
      var comma = ', ',
        sentenceEnd = '.' + newline,
        beerOnTheWall = ' of beer on the wall',
        bottles = ' bottles',
        bottle =  ' bottle',
        noMore = 'no more',
        ofBeer = ' of beer' + sentenceEnd,
        takeDown = function (insert) {
          return 'Take ' + insert + ' down and pass it around, ';
        },
        takeOneDown = takeDown('one');
      if (index === 1) {
        return '1' + bottle + beerOnTheWall + comma + '1' + bottle + ofBeer +
          takeDown('it') + noMore + bottles + beerOnTheWall + sentenceEnd;
      }
      if (index === 0) {
        return 'No more' + bottles + beerOnTheWall + comma + noMore + bottles + ofBeer +
          'Go to the store and buy some more, ' + 99 + bottles + beerOnTheWall + sentenceEnd;
      }
      return index + bottles + beerOnTheWall + comma + index +
        bottles + ofBeer + takeOneDown + (index - 1) +
        (index === 2 ? bottle : bottles) + beerOnTheWall + sentenceEnd;
    },
    sing = function (start, end) {
      var result = [], i;
      end = end || 0;
      for (i = start; i >= end; i -= 1) {
        result.push(verse(i));
      }
      return result.join(newline);
    };
  module.exports = { verse: verse, sing: sing };
}());
