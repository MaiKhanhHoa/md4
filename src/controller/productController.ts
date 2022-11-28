import {Request, Response} from "express";
import {Product} from "../model/product";
import {Category} from "../model/category";

class ProductController {
    showProduct = async (req: Request, res: Response) => {
        let products = await Product.find().populate('category')
        res.json({
            mess: "Show listP",
            products: products
        })
    }

    saveProduct = async (req: Request, res: Response) => {
        let newProduct = req.body
        await Product.create(newProduct)
        res.json({
            mess: "Create"
        })
    }

    removeProduct = async (req: Request, res: Response) => {
        const idRemove = req.params.id;
        await Product.deleteOne({_id: idRemove})
        res.json({
            mess: "Delete"
        })
    }

    editProduct = async (req: Request, res: Response) => {
        const idEdit = req.params.id;
        const newProduct = req.body;
        await Product.updateOne({_id: idEdit},
            {
                $set: newProduct
            })
        res.json({message: "Edit"})
    }

    showDetail = async (req: Request, res: Response) => {
        const idP = req.params.id;
        let product = await Product.findOne({_id: idP}).populate('category', 'nameCategory')
        res.json({message: "Detail", product: product})
    }

    findProduct = async (req: any, res: Response) => {
        let idCFind = req.query.id;
        let namePFind = RegExp(req.query.name, 'i');
        RegExp(req.query.name, 'i')
        let products
        if (idCFind && namePFind) {
            products = await Product.find({nameProduct: namePFind, category: idCFind})
        }
        if (idCFind && !namePFind) {
            products = await Product.find({category: idCFind})
        }
        if (!idCFind && namePFind) {
            products = await Product.find({nameProduct: namePFind})
        }
        res.json({
            mess: "Find",
            products: products
        })
    }

    sortByPrice = async (req: Request, res: Response) => {
        let products = await Product.find({}, null,{ sort: { 'price': 'asc' }})
        res.json({
            mess: "SortByPrice",
            products: products
        })
    }

    sortByQuantity = async (req: Request, res: Response) => {
        let products = await Product.find({}, null,{ sort: { 'quantity': 'desc' }})
        res.json({
            mess: "SortByQuantity",
            products: products
        })
    }

    findBYPrice = async (req: Request, res: Response) => {
        let price1 = req.body.price1;
        let price2 = req.body.price2;
        if (price1 > price2) {
            res.json({
                mess: "Gia bat dau khong the lon hon gia ket thuc"
            })
        } else {
            let products = await Product.find({ price: {$gte: price1, $lte: price2} })
            res.json({
                mess: "FindByPrice",
                products: products
            })
        }
    }

    findByQuantity = async (req: Request, res: Response) => {
        let quantity1 = req.body.quantity1;
        let quantity2 = req.body.quantity2;
        if (quantity1 > quantity2) {
            res.json({
                mess: "So luong bat dau khong the lon hon so luong ket thuc"
            })
        } else {
            let products = await Product.find({ price: {$gte: quantity1, $lte: quantity2} })
            res.json({
                mess: "FindByQuantity",
                products: products
            })
        }
    }

    findCategory = async (req: Request, res: Response) => {
        let category = await Category.find()
        res.json({
            mess: "FindCategory",
            category: category
        })
    }
}

export default new ProductController()