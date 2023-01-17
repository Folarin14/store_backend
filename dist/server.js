"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const UserRoute_1 = __importDefault(require("./routes/UserRoute"));
const ProductRoute_1 = __importDefault(require("./routes/ProductRoute"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};
app.get('/', (req, res) => {
    res.send('Root Endpoint Working...');
});
app.use((0, cors_1.default)(corsOptions));
(0, UserRoute_1.default)(app);
(0, ProductRoute_1.default)(app);
app.listen(config_1.SERVER_PORT, config_1.HOST, () => {
    console.log(`Running on http://${config_1.HOST}:${config_1.SERVER_PORT}`);
});
exports.default = app;
