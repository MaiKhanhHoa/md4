import {Request, Response} from "express";
import {Product} from "../model/product";

class ProductController {
    showProduct = async (req: Request, res: Response) => {
        let products = await Product.find().populate('category', 'nameCategory')
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
}

export default new ProductController()