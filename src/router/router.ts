import Router from "express";
import {productRouter} from "./productRouter";
import {categoryRouter} from "./categoryRouter";

export const router = Router();

router.use('/categories', categoryRouter);
router.use('/products', productRouter);

