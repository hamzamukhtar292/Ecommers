"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authtypeDefs = exports.authResolvers = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

var authtypeDefs = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    extend type Query {\n        profile: User!,\n        user: [User!]!,\n        refreshToken: Auth!,\n        login( username: String!, password: String!): Auth!\n    }\n    type User {\n        name: String!,\n        id:ID!,\n        username: String!,\n        email: String!,\n        createdAt: String!,\n        updatedAt: String!,\n        },\n\n    type Auth {\n        user: User!,\n        token: String!,\n        refreshToken: String!,\n    },\n\n    extend type Mutation {\n        register( \n            name: String!,\n            email: String!,\n            username: String!,\n            password: String!,\n        ): Auth!\n    }\n"])));
exports.authtypeDefs = authtypeDefs;
var authResolvers = {};
exports.authResolvers = authResolvers;