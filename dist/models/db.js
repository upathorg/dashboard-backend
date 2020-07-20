"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var knex_1 = __importDefault(require("knex"));
var knexfile = require('../knexfile');
var env = process.env.NODE_ENV || 'development';
var configs = knexfile[env];
var database = knex_1.default(configs);
exports.default = database;
