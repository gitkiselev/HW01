"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _emp = require("./emp");

var _money = require("./money");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Make =
/*#__PURE__*/
function () {
  function Make(owner) {
    var director = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Victor';
    var money = arguments.length > 2 ? arguments[2] : undefined;
    var employersNames = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, Make);

    this.owner = owner;
    this.director = director;
    this.money = money;
    this.employersNames = employersNames;
  }

  _createClass(Make, [{
    key: "sumSponsors",
    value: function sumSponsors() {
      var _console;

      var eu = _money.sponsors.eu,
          rus = _money.sponsors.rus;
      var sumSponsors = [].concat(_toConsumableArray(eu), _toConsumableArray(rus), ['unexpected sponsor']);
      console.log("We have a business. Owner: ".concat(owner, " , director: ").concat(director, ". Our budget: ").concat(_money.money, ". And our employers:\n        ").concat(_emp.employersNames));
      console.log('And we have a sponsors: ');

      (_console = console).log.apply(_console, _toConsumableArray(sumSponsors));

      console.log('Note. Be careful with ' + _money.sponsors.eu[0] + ". It's a huge risk.");
    }
  }]);

  return Make;
}();

var make = new Make();
make.sumSponsors.apply(make, ['Sam', null, _money.money, _emp.employersNames]); // let makeBusiness = (owner,  director = 'Victor', money, employersNames) => {
//     const {eu, rus} = sponsors;
//     const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
//     console.log(`We have a business. Owner: ${owner} , director: ${director}. Our budget: ${money}. And our employers:
//      ${employersNames}`);
//     console.log('And we have a sponsors: ');
//     console.log(...sumSponsors);
//     console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
// }
// makeBusiness(...['Sam', null, money, employersNames]);