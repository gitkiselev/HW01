"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.money = exports.sponsors = void 0;
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
exports.sponsors = sponsors;
var eu = sponsors.eu,
    rus = sponsors.rus,
    cash = sponsors.cash; // 

var calcCash = function calcCash(own, everyCash) {
  if (isNaN(own) || own == '' || own == null) {
    own = 0;
  }

  var total = everyCash.reduce(function (a, b) {
    return a + b;
  });
  return total;
};

var money = calcCash(null, cash);
exports.money = money;