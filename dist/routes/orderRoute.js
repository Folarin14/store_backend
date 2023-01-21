"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_1 = require("../models/order");
const jwt_auth_1 = require("../auth/jwt_auth");
const ordermodel = new order_1.OrderModel();
const index = async (req, res) => {
    const allOrders = await ordermodel.index();
    res.json(allOrders);
};
const create = async (req, res) => {
    const item = req.body;
    await ordermodel.create(item);
    res.sendStatus(201);
};
const show = async (req, res) => {
    const id = req.params.id;
    const showOrderByUserID = await ordermodel.show(id);
    res.json(showOrderByUserID);
};
const update = async (req, res) => {
    const item = req.body;
    const id = req.params.id;
    const updatedOrder = await ordermodel.update(id, item);
    res.json(updatedOrder);
};
const deleteOrder = async (req, res) => {
    const id = req.params.id;
    const deletedOrder = await ordermodel.delete(id);
    res.json(deletedOrder);
};
const orderRoutes = (app) => {
    app.get('/order', jwt_auth_1.verifyUser, index);
    app.get('/order/:id', jwt_auth_1.verifyUser, show);
    app.post('/order', express_1.default.json(), jwt_auth_1.verifyUser, create);
    app.put('/order/:id', express_1.default.json(), jwt_auth_1.verifyUser, update);
    app.delete('/order/:id', jwt_auth_1.verifyUser, deleteOrder);
};
exports.default = orderRoutes;
