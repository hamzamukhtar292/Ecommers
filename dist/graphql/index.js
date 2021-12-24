"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

var _lodash = require("lodash");

var _templateObject, _templateObject2;

var Query = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n\n    type Query {\n        _: String\n    }\n"])));
var Mutation = (0, _apolloServerExpress.gql)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    type Mutation {\n        _: String\n}\n"])));
var typeDefs = [Query, Mutation];
exports.typeDefs = typeDefs;