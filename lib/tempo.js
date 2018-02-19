'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTempo = exports.getCity = undefined;

var _config = require('./config');

var _util = require('./util');

var getCity = exports.getCity = function getCity(ids) {
  return fetch('' + _config.API_URL + ids + '&mode=json&units=metric&appid=a0bf404919f7603c5bde4b4291c5a1c3').then(_util.toJSON);
};

var getTempo = exports.getTempo = function getTempo(ids) {
  return fetch('' + _config.API_URL + ids + '&mode=json&units=metric&appid=a0bf404919f7603c5bde4b4291c5a1c3').then(_util.toJSON);
};