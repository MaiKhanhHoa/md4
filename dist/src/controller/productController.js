"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
const category_1 = require("../model/category");
class ProductController {
    constructor() {
        this.showProduct = async (req, res) => {
            let products = await product_1.Product.find().populate('category');
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
        this.showDetail = async (req, res) => {
            const idP = req.params.id;
            let product = await product_1.Product.findOne({ _id: idP }).populate('category', 'nameCategory');
            res.json({ message: "Detail", product: product });
        };
        this.findProduct = async (req, res) => {
            let idCFind = req.query.id;
            let namePFind = RegExp(req.query.name, 'i');
            RegExp(req.query.name, 'i');
            let products;
            if (idCFind && namePFind) {
                products = await product_1.Product.find({ nameProduct: namePFind, category: idCFind });
            }
            if (idCFind && !namePFind) {
                products = await product_1.Product.find({ category: idCFind });
            }
            if (!idCFind && namePFind) {
                products = await product_1.Product.find({ nameProduct: namePFind });
            }
            res.json({
                mess: "Find",
                products: products
            });
        };
        this.sortByPrice = async (req, res) => {
            let products = await product_1.Product.find({}, null, { sort: { 'price': 'asc' } });
            res.json({
                mess: "SortByPrice",
                products: products
            });
        };
        this.sortByQuantity = async (req, res) => {
            let products = await product_1.Product.find({}, null, { sort: { 'quantity': 'desc' } });
            res.json({
                mess: "SortByQuantity",
                products: products
            });
        };
        this.findBYPrice = async (req, res) => {
            let price1 = req.body.price1;
            let price2 = req.body.price2;
            if (price1 > price2) {
                res.json({
                    mess: "Gia bat dau khong the lon hon gia ket thuc"
                });
            }
            else {
                let products = await product_1.Product.find({ price: { $gte: price1, $lte: price2 } });
                res.json({
                    mess: "FindByPrice",
                    products: products
                });
            }
        };
        this.findByQuantity = async (req, res) => {
            let quantity1 = req.body.quantity1;
            let quantity2 = req.body.quantity2;
            if (quantity1 > quantity2) {
                res.json({
                    mess: "So luong bat dau khong the lon hon so luong ket thuc"
                });
            }
            else {
                let products = await product_1.Product.find({ price: { $gte: quantity1, $lte: quantity2 } });
                res.json({
                    mess: "FindByQuantity",
                    products: products
                });
            }
        };
        this.findCategory = async (req, res) => {
            let category = await category_1.Category.find();
            res.json({
                mess: "FindCategory",
                category: category
            });
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map