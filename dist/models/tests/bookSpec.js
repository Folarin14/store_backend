"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("../book");
const store = new book_1.BookStore();
describe('Checks Book Model', () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });
    it('index method should return a list of products', async () => {
        const result = await store.index();
        expect(result).toEqual([]);
    });
});
