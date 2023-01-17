"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_auth_1 = require("../auth/jwt_auth");
const user_1 = require("../models/user");
//Index, Show, Create endpoints
const usermodel = new user_1.UserModel();
const index = async (req, res) => {
    const allUsers = await usermodel.index();
    res.json(allUsers);
};
const show = async (req, res) => {
    const id = req.params.id;
    const showUserById = await usermodel.show(id);
    res.json(showUserById);
};
const create = async (req, res) => {
    // unpack the request to get the item
    const item = req.body;
    const firstName = item.firstName;
    const lastName = item.lastName;
    // const userPassword = item.password;
    const accessToken = (0, jwt_auth_1.signUser)({
        firstName: firstName,
        lastName: lastName,
        admin: true,
    });
    await usermodel.create(item);
    res.set('authorization', `Bearer ${accessToken}`).sendStatus(201);
};
const userRoutes = (app) => {
    app.get('/user', jwt_auth_1.verifyUser, index);
    app.get('/user/:id', jwt_auth_1.verifyUser, show);
    app.post('/user', express_1.default.json(), create);
};
exports.default = userRoutes;
