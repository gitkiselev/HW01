"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.money = exports.eu = exports.rus = exports.srl = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

var cash = sponsors.cash,
    _sponsors$eu = _slicedToArray(sponsors.eu, 1),
    srl = _sponsors$eu[0],
    rus = sponsors.rus;

exports.rus = rus;
exports.srl = srl;
var eu = sponsors.eu;
exports.eu = eu;

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