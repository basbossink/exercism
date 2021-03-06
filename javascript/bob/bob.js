/*
 * Copyright 2015 Bas Bossink <bas.bossink@gmail.com>
 * This code is licensed under the GNU General Public License version 3.
 */
(function () {
  'use strict';
  var bob = function () {
    var hey = function (what) {
      if (/^\s*$/.test(what)) {
        return "Fine. Be that way!";
      }
      if (/[A-Z]/.test(what) && what.toUpperCase() === what) {
        return "Woah, chill out!";
      }
      if (/\?$/.test(what)) {
        return "Sure.";
      }
      return "Whatever.";
    };
    return { hey: hey };
  };
  module.exports = bob;
}());
