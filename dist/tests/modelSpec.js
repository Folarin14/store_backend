"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../models/product");
const user_1 = require("../models/user");
const order_1 = require("../models/order");
// import { verifyPassword } from '../hashing/password_hash';
const userModel = new user_1.UserModel();
const productModel = new product_1.ProductModel();
const ordermodel = new order_1.OrderModel();
describe('Check User Model', () => {
    it('checks that the index is defined', async () => {
        expect(userModel.index).toBeDefined();
    });
    it('checks if you can successfully create a new user', async () => {
        const result = await userModel.create({
            firstName: 'Afolarin',
            lastName: 'Lawal',
            password: 'password123',
        });
        //@ts-ignore
        expect(result.first_name).toBe('Afolarin');
    });
    it('checks if you can query user table by id', async () => {
        const result = await userModel.show('1');
        //@ts-ignore
        expect(result.first_name).toEqual('Afolarin');
    });
    it('checks if you can retrieve all the items in user table', async () => {
        const result = await userModel.index();
        expect(result).toHaveSize(1);
    });
});
describe('Check Product Model', () => {
    it('checks that the index is defined', async () => {
        expect(productModel.index).toBeDefined();
    });
    it('checks if the product was successfully created in database', async () => {
        const result = await productModel.create({
            name: 'milk',
            price: 10,
            category: 'grocery',
        });
        expect(result).toEqual({
            //@ts-ignore
            id: 1,
            name: 'milk',
            price: 10,
            category: 'grocery',
        });
    });
    it('checks if you can query by id', async () => {
        const result = await productModel.show('1');
        expect(result).toEqual({
            //@ts-ignore
            id: 1,
            name: 'milk',
            price: 10,
            category: 'grocery',
        });
    });
    it('checks if you can show all items in database', async () => {
        const result = await productModel.index();
        expect(result).toEqual([
            {
                //@ts-ignore
                id: 1,
                name: 'milk',
                price: 10,
                category: 'grocery',
            },
        ]);
    });
});
describe('Check Order Model', () => {
    it('checks that index is defined', async () => {
        expect(ordermodel.index).toBeDefined();
    });
    it('checks if a new order can be created successfully', async () => {
        const result = await ordermodel.create({
            productID: '1',
            quantity: 2,
            userID: '1',
            status: 'active',
        });
        expect(result).toEqual({
            //@ts-ignore
            id: 1,
            product_id: 1,
            quantity: 2,
            user_id: 1,
            order_status: 'active',
        });
    });
    it('checks if you can query by user id', async () => {
        const result = await ordermodel.show('1');
        expect(result).toEqual([
            {
                //@ts-ignore
                id: 1,
                product_id: 1,
                quantity: 2,
                user_id: 1,
                order_status: 'active',
            },
        ]);
    });
    it('checks if you can show all items in a database', async () => {
        const result = await ordermodel.index();
        expect(result).toEqual([
            {
                //@ts-ignore
                id: 1,
                product_id: 1,
                quantity: 2,
                user_id: 1,
                order_status: 'active',
            },
        ]);
    });
    it('Checks if you can update/edit a row in the database', async () => {
        const testItem = {
            productID: '1',
            quantity: 5,
            userID: '1',
            status: 'complete',
        };
        const result = await ordermodel.update('1', testItem);
        expect(result).toEqual({
            //@ts-ignore
            id: 1,
            product_id: 1,
            quantity: 5,
            user_id: 1,
            order_status: 'complete',
        });
    });
});
