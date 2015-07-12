/*
 * Copyright 2015 Bas Bossink <bas.bossink@gmail.com>
 * This code is licensed under the GNU General Public License version 3.
 */
(function () {
  'use strict';
  var PhoneNumber = function (inputNumber) {
    var normalized = inputNumber.split('').filter(function (c) {
          return (/\d/).test(c);
        }).join(''),
      normalizedLength = normalized.length,
      regex = /^1(\d{10})/.exec(normalized),
      hasCorrectLength = normalizedLength === 10,
      number = function () {
        if (hasCorrectLength) {
          return normalized;
        }
        if (regex) {
          return regex[1];
        }
        return "0000000000";
      },
      areaCode = function () {
        return number().substring(0, 3);
      },
      toString = function () {
        var numberResult = number();
        return "(" + areaCode() + ") " + numberResult.substring(3, 6) +
          "-" + numberResult.substring(6);
      };
    return { number: number, areaCode: areaCode, toString: toString };
  };
  module.exports = PhoneNumber;
}());