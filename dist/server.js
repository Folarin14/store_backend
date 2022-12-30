"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_js_1 = require("./config.js");
const SERVER_PORT = config_js_1.PORT;
const SERVER_HOST = config_js_1.HOST;
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Root Endpoint Working...');
});
app.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`Running on http://${config_js_1.HOST}:${config_js_1.PORT}`);
});
exports.default = app;
