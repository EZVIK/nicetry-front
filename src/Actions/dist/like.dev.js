"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LikeActions = void 0;

var _utils = require("../utils");

var LikeActions = {
  AddLike: AddLike
};
exports.LikeActions = LikeActions;

function AddLike(id) {
  var type,
      data,
      _args = arguments;
  return regeneratorRuntime.async(function AddLike$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          type = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1;
          data = {
            "post_id": id,
            "like_type": type
          };
          _context.next = 4;
          return regeneratorRuntime.awrap(_utils.RA.HttpRequest("POST", "like", data, {}));

        case 4:
          return _context.abrupt("return", _context.sent);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}