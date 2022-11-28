import router from "express";
import productController from "../controller/productController";

export const productRouter = router();

productRouter.get('/', productController.showProduct);
productRouter.post('/', productController.saveProduct);
productRouter.delete('/:id', productController.removeProduct);
productRouter.put('/:id', productController.editProduct);
productRouter.get('/detail/:id', productController.showDetail);
productRouter.get('/findProduct', productController.findProduct);
productRouter.get('/sortByPrice', productController.sortByPrice);
productRouter.get('/sortByQuantity', productController.sortByQuantity);
productRouter.post('/findByPrice', productController.findBYPrice);
productRouter.post('/findByQuantity', productController.findByQuantity);
productRouter.get('/findCategory', productController.findCategory);