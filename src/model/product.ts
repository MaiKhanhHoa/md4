import {Schema,model} from 'mongoose'
import {ICategory} from "./category";

export interface IProduct {
    nameProduct ?:string,
    price ?:number,
    category ?: ICategory,
    description ?:string
}

const ProductSchema = new Schema<IProduct>({
    nameProduct : String,
    price : Number,
    category : {
        type: Schema.Types.ObjectId,
        ref:"category"
    },
    description:String,
})

const Product = model<IProduct>('product',ProductSchema)
export {Product}