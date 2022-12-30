"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_js_1 = require("./config.js");
const pg_1 = __importDefault(require("pg"));
const { Pool } = pg_1.default;
const pool = new Pool({
    host: config_js_1.HOST,
    database: config_js_1.NODE_ENV === 'development' ? config_js_1.PG_DATABASE : config_js_1.TEST_DATABASE,
    user: config_js_1.PG_USERNAME,
    password: config_js_1.PG_PASSWORD,
});
console.log('Printing Node env used', config_js_1.NODE_ENV);
exports.default = pool;
