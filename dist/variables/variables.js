"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NODE_ENV = exports.IN_PROD = exports.DB = exports.APP_PORT = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var _process$env = process.env,
    APP_PORT = _process$env.APP_PORT,
    DB = _process$env.DB,
    NODE_ENV = _process$env.NODE_ENV;
exports.NODE_ENV = NODE_ENV;
exports.DB = DB;
exports.APP_PORT = APP_PORT;
var IN_PROD = NODE_ENV === 'production';
exports.IN_PROD = IN_PROD;