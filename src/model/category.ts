import {Schema,model} from 'mongoose'

export interface ICategory {
    nameCategory:string
}

const categorySchema = new Schema<ICategory>({
    nameCategory:String
})

const Category = model<ICategory>('category',categorySchema)
export {Category}