import {Schema, model} from 'mongoose'
import {ICategory} from "./category";

export interface IProduct {
    nameProduct?: string,
    price?: number,
    category?: ICategory,
    quantity?: number
}

const ProductSchema = new Schema<IProduct>({
    nameProduct: String,
    price: Number,
    category: {
        type: Schema.Types.ObjectId,
        ref: "category"
    },
    quantity: Number,
})

const Product = model<IProduct>('product', ProductSchema)
export {Product}