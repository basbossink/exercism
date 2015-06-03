/*
 * Copyright 2015 Bas Bossink <bas.bossink@gmail.com>
 * This code is licensed under the GNU General Public License version 3.
 */
(function () {
  'use strict';
  var song = [
      "I know an old lady who swallowed a fly.\n" +
        "I don't know why she swallowed the fly. Perhaps she'll die.\n",
      "I know an old lady who swallowed a spider.\n" +
        "It wriggled and jiggled and tickled inside her.\n" +
        "She swallowed the spider to catch the fly.\n" +
        "I don't know why she swallowed the fly. Perhaps she'll die.\n",
      "I know an old lady who swallowed a bird.\n" +
        "How absurd to swallow a bird!\n" +
        "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
        "She swallowed the spider to catch the fly.\n" +
        "I don't know why she swallowed the fly. Perhaps she'll die.\n",
      "I know an old lady who swallowed a cat.\n" +
        "Imagine that, to swallow a cat!\n" +
        "She swallowed the cat to catch the bird.\n" +
        "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
        "She swallowed the spider to catch the fly.\n" +
        "I don't know why she swallowed the fly. " +
        "Perhaps she'll die.\n",
      "I know an old lady who swallowed a dog.\n" +
        "What a hog, to swallow a dog!\n" +
        "She swallowed the dog to catch the cat.\n" +
        "She swallowed the cat to catch the bird.\n" +
        "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
        "She swallowed the spider to catch the fly.\n" +
        "I don't know why she swallowed the fly. " +
        "Perhaps she'll die.\n",
      "I know an old lady who swallowed a goat.\n" +
        "Just opened her throat and swallowed a goat!\n" +
        "She swallowed the goat to catch the dog.\n" +
        "She swallowed the dog to catch the cat.\n" +
        "She swallowed the cat to catch the bird.\n" +
        "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
        "She swallowed the spider to catch the fly.\n" +
        "I don't know why she swallowed the fly. " +
        "Perhaps she'll die.\n",
      "I know an old lady who swallowed a cow.\n" +
        "I don't know how she swallowed a cow!\n" +
        "She swallowed the cow to catch the goat.\n" +
        "She swallowed the goat to catch the dog.\n" +
        "She swallowed the dog to catch the cat.\n" +
        "She swallowed the cat to catch the bird.\n" +
        "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
        "She swallowed the spider to catch the fly.\n" +
        "I don't know why she swallowed the fly. " +
        "Perhaps she'll die.\n",
      "I know an old lady who swallowed a horse.\n" +
        "She's dead, of course!\n"
    ],
    verse = function (index) {
      return song[index - 1];
    },
    verses = function (start, end) {
      return song.slice(start - 1, end).join('\n') + '\n';
    };
  module.exports = { verse: verse, verses: verses };
}());
