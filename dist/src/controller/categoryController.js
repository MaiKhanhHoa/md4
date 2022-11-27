"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = require("../model/category");
class CategoryController {
    constructor() {
        this.saveCategory = async (req, res) => {
            let newCategory = req.body;
            console.log(newCategory);
            await category_1.Category.create(newCategory);
            res.status(201).json({
                mess: "Create"
            });
        };
        this.showCategories = async (req, res) => {
            let categories = await category_1.Category.find();
            res.status(200).json(categories);
        };
    }
}
exports.default = new CategoryController();
//# sourceMappingURL=categoryController.js.map