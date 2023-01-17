"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
const config_1 = require("../config");
// import pool from '../database';
const request = (0, supertest_1.default)(server_1.default);
describe('Testing API Endpoint', () => {
    it('checks if the root endpoint is functioning', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });
    // Testing users endpoint
    it('checks if a user data can be created successfully', async () => {
        const response = await request.post('/user').send({
            firstName: 'Afolarin',
            lastName: 'Lawal',
            password: 'password1234',
        });
        expect(response.status).toBe(201);
    });
    it('checks if the user endpoint returns all data in database', async () => {
        const response = await request.get('/user')
            .set('authorization', config_1.TEST_TOKEN);
        expect(response.body).toHaveSize(2);
    });
    it('checks if the user endpoint returns specified id', async () => {
        const response = await request.get('/user/1')
            .set('authorization', config_1.TEST_TOKEN);
        expect(response.body.first_name).toBe('Afolarin');
    });
    // Testing products endpoint
    it('checks if a product can be created successfully', async () => {
        const response = await request.post('/product')
            .set('authorization', config_1.TEST_TOKEN);
        expect(response.status).toBe(201);
    });
    it('checks if the product endpoint returns all data in database', async () => {
        const response = await request.get('/product');
        expect(response.body).toHaveSize(2);
    });
    it('checks if the product endpoint returns specified id', async () => {
        const response = await request.get('/product/1');
        expect(response.body).toEqual({
            //@ts-ignore
            id: 1,
            name: 'milk',
            price: 10,
            category: 'grocery',
        });
    });
});
// 	// it('Checks if the database connection is working', (): void => {
// 	// 	expect(
// 	// 		pool
// 	// 			.connect()
// 	// 			.then(() => console.log('Success'))
// 	// 			.catch(() => console.log('Failure'))
// 	// 	).toBe(Promise<void>);
// 	// });
