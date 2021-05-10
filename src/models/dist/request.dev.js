"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HttpRequest = HttpRequest;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function HttpRequest(method, url, body, header) {
  var jwt = localStorage.getItem('token');
  header['token'] = jwt;
  var config = {
    method: method,
    url: url,
    headers: header,
    data: body
  }; // return config

  return (0, _axios["default"])(config);
}