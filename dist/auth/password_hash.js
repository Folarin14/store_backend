"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = exports.hashPassword = void 0;
const bcrypt_1 = require("bcrypt");
const saltRounds = 10;
async function hashPassword(password) {
    const hashedPassword = await (0, bcrypt_1.hash)(password, saltRounds);
    return hashedPassword;
}
exports.hashPassword = hashPassword;
async function verifyPassword(password, hashedPassword) {
    const match = await (0, bcrypt_1.compare)(password, hashedPassword);
    return match;
}
exports.verifyPassword = verifyPassword;
