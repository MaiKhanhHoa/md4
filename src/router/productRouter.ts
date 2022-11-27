import router from "express";
import productController from "../controller/productController";

export const productRouter = router();

productRouter.get('/', productController.showProduct);
productRouter.post('/', productController.saveProduct);
productRouter.delete('/:id', productController.removeProduct);
productRouter.put('/:id', productController.editProduct);