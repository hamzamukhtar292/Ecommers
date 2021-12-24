"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServerExpress = require("apollo-server-express");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("winston/lib/winston/config"));

var _graphql = require("./graphql");

var _variables = require("./variables/variables");

var app = (0, _express["default"])();
var server = new _apolloServerExpress.ApolloServer({
  typeDefs: _graphql.typeDefs,
  resolvers: _graphql.resolvers,
  context: function () {
    var _context = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
      var req;
      return _regenerator["default"].wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = _ref.req;
              return _context2.abrupt("return", {
                token: req.headers.authorization || '',
                refresh_token: req.headers.refresh_token || ''
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee);
    }));

    function context(_x) {
      return _context.apply(this, arguments);
    }

    return context;
  }()
});

var startApp = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _mongoose["default"].connect(_variables.DB, {
              useNewUrlParser: true,
              useUnifiedTopology: true
            });

          case 3:
            _context3.next = 5;
            return server.start();

          case 5:
            server.applyMiddleware({
              app: app,
              cors: true
            });
            app.listen({
              port: _variables.APP_PORT
            }, function () {
              console.log("Server is listening on port ".concat(_variables.APP_PORT));
            });
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function startApp() {
    return _ref2.apply(this, arguments);
  };
}();

startApp();