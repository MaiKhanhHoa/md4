"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const productRouter_1 = require("./productRouter");
const categoryRouter_1 = require("./categoryRouter");
exports.router = (0, express_1.default)();
exports.router.use('/categories', categoryRouter_1.categoryRouter);
exports.router.use('/products', productRouter_1.productRouter);
//# sourceMappingURL=router.js.map