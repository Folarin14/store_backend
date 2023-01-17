"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUser = exports.verifyUser = void 0;
const config_1 = require("../config");
const jsonwebtoken_1 = require("jsonwebtoken");
const verifyUser = function (req, res, next) {
    const auth = req.headers['authorization'];
    const token = auth?.split(' ')[1];
    if (!token) {
        res.sendStatus(401);
    }
    else {
        (0, jsonwebtoken_1.verify)(token, config_1.TOKEN_SECRET, (err) => {
            if (err) {
                res.status(403).send('Token provided but invalid');
            }
            // req.body = user;
            // req.
            next();
        });
    }
};
exports.verifyUser = verifyUser;
const signUser = function (payload) {
    const accessToken = (0, jsonwebtoken_1.sign)(payload, config_1.TOKEN_SECRET);
    return accessToken;
};
exports.signUser = signUser;
