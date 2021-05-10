"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _like = require("./like");

Object.keys(_like).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _like[key];
    }
  });
});