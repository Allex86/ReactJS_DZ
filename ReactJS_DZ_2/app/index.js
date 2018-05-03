'use strict';
let message = require('./message');

message('Модуль вызван из Index.js');

exports.message = message;