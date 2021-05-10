"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RA = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RA = {
  HttpRequest: HttpRequest
};
exports.RA = RA;

function HttpRequest(method, url, body, header) {
  var jwt = localStorage.getItem('token');
  var http = "http://";
  var HOST = "localhost:6079";
  var URL_PRE = "/api/v1/";
  var FULL_URL = http + HOST + URL_PRE + url;
  header['token'] = jwt;
  var config = {
    method: method,
    url: FULL_URL,
    headers: header,
    data: body
  };
  console.log(config);
  return (0, _axios["default"])(config);
}