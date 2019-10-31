"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
var employersNames = employers.filter(function (emp) {
  return emp.length > 0;
}).map(function (emp) {
  return emp.toLowerCase().trim();
});
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
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

var makeBusiness = function makeBusiness(owner) {
  var _console;

  var director = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Victor';
  var money = arguments.length > 2 ? arguments[2] : undefined;
  var employersNames = arguments.length > 3 ? arguments[3] : undefined;
  var eu = sponsors.eu,
      rus = sponsors.rus;
  var sumSponsors = [].concat(_toConsumableArray(eu), _toConsumableArray(rus), ['unexpected sponsor']);
  console.log("We have a business. Owner: ".concat(owner, " , director: ").concat(director, ". Our budget: ").concat(money, ". And our employers:\n     ").concat(employersNames));
  console.log('And we have a sponsors: ');

  (_console = console).log.apply(_console, _toConsumableArray(sumSponsors));

  console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
};

makeBusiness.apply(void 0, ['Sam', null, money, employersNames]);