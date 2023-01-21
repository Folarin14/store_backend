"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SALTROUNDS = exports.PEPPER = exports.TEST_TOKEN = exports.TOKEN_SECRET = exports.TEST_DATABASE = exports.NODE_ENV = exports.PG_DATABASE = exports.PG_PASSWORD = exports.PG_USERNAME = exports.DB_PORT = exports.HOST = exports.SERVER_PORT = void 0;
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { PORT, LOCALHOST, PG_PORT, PG_USERNAME, PG_PASSWORD, PG_DATABASE, NODE_ENV, TEST_DATABASE, ACCESS_TOKEN_SECRET, TEST_BEARER_TOKEN, MASK_PASSWORD, ROUNDS, } = process.env;
exports.PG_USERNAME = PG_USERNAME;
exports.PG_PASSWORD = PG_PASSWORD;
exports.PG_DATABASE = PG_DATABASE;
exports.NODE_ENV = NODE_ENV;
exports.TEST_DATABASE = TEST_DATABASE;
const SERVER_PORT = PORT;
exports.SERVER_PORT = SERVER_PORT;
const DB_PORT = PG_PORT;
exports.DB_PORT = DB_PORT;
const HOST = LOCALHOST; //as string;
exports.HOST = HOST;
const TOKEN_SECRET = ACCESS_TOKEN_SECRET; //as string
exports.TOKEN_SECRET = TOKEN_SECRET;
const TEST_TOKEN = TEST_BEARER_TOKEN;
exports.TEST_TOKEN = TEST_TOKEN;
const SALTROUNDS = ROUNDS;
exports.SALTROUNDS = SALTROUNDS;
const PEPPER = MASK_PASSWORD;
exports.PEPPER = PEPPER;
