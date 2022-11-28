import {Schema,model} from 'mongoose'

export interface ICategory {
    nameCategory:string,
    description:string
}

const categorySchema = new Schema<ICategory>({
    nameCategory:String,
    description:String
})

const Category = model<ICategory>('category',categorySchema)
export {Category}