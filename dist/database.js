"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const pg_1 = __importDefault(require("pg"));
const { Pool } = pg_1.default;
const pool = new Pool({
    host: config_1.HOST,
    port: config_1.DB_PORT,
    database: config_1.NODE_ENV === 'development' ? config_1.PG_DATABASE : config_1.TEST_DATABASE,
    user: config_1.PG_USERNAME,
    password: config_1.PG_PASSWORD,
});
console.log('Printing Node env used', config_1.NODE_ENV);
exports.default = pool;
