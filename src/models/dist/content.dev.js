"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ContentData;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ContentData(id) {
  var jwt = localStorage.getItem('token');
  var config = {
    method: 'get',
    url: 'http://localhost:6079/api/v1/nice/' + id,
    headers: {
      'token': jwt
    }
  };
  return (0, _axios["default"])(config);
}