"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    nameProduct: String,
    price: Number,
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "category"
    },
    description: String,
});
const Product = (0, mongoose_1.model)('product', ProductSchema);
exports.Product = Product;
//# sourceMappingURL=product.js.map