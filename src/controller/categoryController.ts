import {Request, Response} from "express";
import {Category} from "../model/category";


class CategoryController {
    saveCategory = async (req:Request,res:Response)=>{
        let newCategory = req.body
        await Category.create(newCategory)
        res.status(201).json({
            mess:"Create"
        })
    }
    showCategories = async (req:Request,res:Response)=>{
        let categories = await Category.find()
        res.status(200).json(categories)
    }

}
export default new CategoryController()