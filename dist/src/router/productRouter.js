"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const productController_1 = __importDefault(require("../controller/productController"));
exports.productRouter = (0, express_1.default)();
exports.productRouter.get('/', productController_1.default.showProduct);
exports.productRouter.post('/', productController_1.default.saveProduct);
exports.productRouter.delete('/:id', productController_1.default.removeProduct);
exports.productRouter.put('/:id', productController_1.default.editProduct);
//# sourceMappingURL=productRouter.js.map