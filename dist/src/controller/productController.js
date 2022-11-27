"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
class ProductController {
    constructor() {
        this.showProduct = async (req, res) => {
            let products = await product_1.Product.find().populate('category', 'nameCategory');
            res.json({
                mess: "Show listP",
                products: products
            });
        };
        this.saveProduct = async (req, res) => {
            let newProduct = req.body;
            await product_1.Product.create(newProduct);
            res.json({
                mess: "Create"
            });
        };
        this.removeProduct = async (req, res) => {
            const idRemove = req.params.id;
            await product_1.Product.deleteOne({ _id: idRemove });
            res.json({
                mess: "Delete"
            });
        };
        this.editProduct = async (req, res) => {
            const idEdit = req.params.id;
            const newProduct = req.body;
            await product_1.Product.updateOne({ _id: idEdit }, {
                $set: newProduct
            });
            res.json({ message: "Edit" });
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map