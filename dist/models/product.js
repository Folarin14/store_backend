"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const database_1 = __importDefault(require("../database"));
class ProductModel {
    async index() {
        try {
            const conn = await database_1.default.connect();
            const query = 'SELECT * FROM Products';
            const result = await conn.query(query);
            conn.release();
            return result.rows;
        }
        catch (error) {
            throw new Error(`Cannot retrieve items in database - ${error}`);
        }
    }
    async show(id) {
        try {
            const conn = await database_1.default.connect();
            const query = 'SELECT * FROM Products WHERE id =($1)';
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
        try {
            const conn = await database_1.default.connect();
            const query = 'INSERT INTO Products (name, price, category) VALUES ($1, $2, $3) RETURNING *';
            const result = await database_1.default.query(query, [
                item.name,
                item.price,
                item.category,
            ]);
            conn.release();
            return result.rows[0];
        }
        catch (error) {
            throw new Error(`Cannot create item in database - ${error}`);
        }
    }
}
exports.ProductModel = ProductModel;
