"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEST_DATABASE = exports.NODE_ENV = exports.PG_DATABASE = exports.PG_PASSWORD = exports.PG_USERNAME = exports.HOST = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { PORT, HOST, PG_USERNAME, PG_PASSWORD, PG_DATABASE, NODE_ENV, TEST_DATABASE, } = process.env;
exports.PORT = PORT;
exports.HOST = HOST;
exports.PG_USERNAME = PG_USERNAME;
exports.PG_PASSWORD = PG_PASSWORD;
exports.PG_DATABASE = PG_DATABASE;
exports.NODE_ENV = NODE_ENV;
exports.TEST_DATABASE = TEST_DATABASE;
