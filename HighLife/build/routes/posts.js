"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/", function (req, res) {
  res.send("posts");
});
router.get("/read/:id", function (req, res) {
  res.send("You are reading post " + req.params.id);
});
var _default = router;
exports["default"] = _default;