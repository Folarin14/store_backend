"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = require("../models/product");
const jwt_auth_1 = require("../auth/jwt_auth");
const productmodel = new product_1.ProductModel();
// index, show, create and update endpoints
const index = async (_req, res) => {
    const allProducts = await productmodel.index();
    res.json(allProducts);
};
const show = async (req, res) => {
    const id = req.params.id;
    const showProductById = await productmodel.show(id);
    res.json(showProductById);
};
const create = async (req, res) => {
    const item = req.body;
    await productmodel.create(item);
    res.sendStatus(201);
};
const productRoutes = (app) => {
    app.get('/product', index);
    app.get('/product/:id', show);
    app.post('/product', express_1.default.json(), jwt_auth_1.verifyUser, create);
};
exports.default = productRoutes;
