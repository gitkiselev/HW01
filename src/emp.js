"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employersNames = void 0;
var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
var employersNames = employers.filter(function (emp) {
  return emp.length > 0;
}).map(function (emp) {
  return emp.toLowerCase().trim();
});
exports.employersNames = employersNames;