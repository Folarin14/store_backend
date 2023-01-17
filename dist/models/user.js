"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const database_1 = __importDefault(require("../database"));
const password_hash_1 = require("../auth/password_hash");
class UserModel {
    async index() {
        //TODO: Token required
        try {
            const conn = await database_1.default.connect();
            const query = 'SELECT * FROM Users';
            const result = await conn.query(query);
            conn.release();
            return result.rows;
        }
        catch (error) {
            throw new Error(`Cannot retrieve items in database - ${error}`);
        }
    }
    async show(id) {
        //TODO: Token Required
        try {
            const conn = await database_1.default.connect();
            const query = 'SELECT * FROM Users WHERE id =($1)';
            const result = await conn.query(query, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (error) {
            throw new Error(`Cannot retrieve items in database - ${error}`);
        }
    }
    async create(item) {
        //TODO: Token Required
        //hash password
        const hashedPassword = await (0, password_hash_1.hashPassword)(item.password);
        try {
            const conn = await database_1.default.connect();
            const query = 'INSERT INTO Users (first_name, last_name, password) VALUES ($1, $2, $3) RETURNING *';
            const result = await conn.query(query, [
                item.firstName,
                item.lastName,
                hashedPassword,
            ]);
            conn.release();
            return result.rows[0];
        }
        catch (error) {
            throw new Error(`Cannot create item in database - ${error}`);
        }
    }
}
exports.UserModel = UserModel;
