"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_js_1 = __importDefault(require("../server.js"));
// import pool from '../database.js';
const request = (0, supertest_1.default)(server_js_1.default);
describe('Testing API Endpoint', () => {
    it('checks if the root endpoint is functioning', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });
    // it('Checks if the database connection is working', (): void => {
    // 	expect(
    // 		pool
    // 			.connect()
    // 			.then(() => console.log('Success'))
    // 			.catch(() => console.log('Failure'))
    // 	).toBe(Promise<void>);
    // });
});
