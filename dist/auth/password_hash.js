"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = exports.hashPassword = void 0;
const bcrypt_1 = require("bcrypt");
const config_1 = require("../config");
async function hashPassword(password) {
    const hashedPassword = await (0, bcrypt_1.hash)(password + config_1.PEPPER, parseInt(config_1.SALTROUNDS));
    return hashedPassword;
}
exports.hashPassword = hashPassword;
async function verifyPassword(password, hashedPassword) {
    const match = await (0, bcrypt_1.compare)(password + config_1.PEPPER, hashedPassword);
    return match;
}
exports.verifyPassword = verifyPassword;
