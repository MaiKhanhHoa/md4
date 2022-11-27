import { Request, Response } from "express";
declare class ProductController {
    showProduct: (req: Request, res: Response) => Promise<void>;
    saveProduct: (req: Request, res: Response) => Promise<void>;
    removeProduct: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
