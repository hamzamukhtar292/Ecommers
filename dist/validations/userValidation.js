"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerValidate = exports.loginValidate = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var name = _joi["default"].string().max(255).required().label('Name');

var email = _joi["default"].string().email().required().label('Email');

var username = _joi["default"].string().max(255).min(3).required().label('Username');

var password = _joi["default"].string().max(30).min(4).required().regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d).*$/).label('Password').messages({
  "string.regex": "Must have Allest Uppercase lowercase and digit"
});

var loginValidate = _joi["default"].object().keys({
  username: username,
  password: password
});

exports.loginValidate = loginValidate;

var registerValidate = _joi["default"].object().keys({
  name: name,
  email: email,
  username: username,
  password: password
});

exports.registerValidate = registerValidate;