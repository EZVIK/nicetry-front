"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var jwt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return jwt;
  }
};

exports["default"] = _default;