/*
 * Copyright 2015 Bas Bossink <bas.bossink@gmail.com>
 * This code is licensed under the GNU General Public License version 3.
 */
(function () {
  'use strict';
  var helloWorld = function () {
    var hello = function (name) {
      name = name || "world";
      return "Hello, " + name + "!";
    };
    return { hello: hello };
  };
  module.exports = helloWorld;
}());
