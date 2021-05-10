"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _Reducer = _interopRequireDefault(require("./Reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var jwt = (0, _redux.createStore)(_Reducer["default"]);
var _default = jwt;
exports["default"] = _default;