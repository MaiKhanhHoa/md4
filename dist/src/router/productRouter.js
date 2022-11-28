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
exports.productRouter.get('/detail/:id', productController_1.default.showDetail);
exports.productRouter.get('/findProduct', productController_1.default.findProduct);
exports.productRouter.get('/sortByPrice', productController_1.default.sortByPrice);
exports.productRouter.get('/sortByQuantity', productController_1.default.sortByQuantity);
exports.productRouter.post('/findByPrice', productController_1.default.findBYPrice);
exports.productRouter.post('/findByQuantity', productController_1.default.findByQuantity);
exports.productRouter.get('/findCategory', productController_1.default.findCategory);
//# sourceMappingURL=productRouter.js.map