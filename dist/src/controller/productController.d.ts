import { Request, Response } from "express";
declare class ProductController {
    showProduct: (req: Request, res: Response) => Promise<void>;
    saveProduct: (req: Request, res: Response) => Promise<void>;
    removeProduct: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    showDetail: (req: Request, res: Response) => Promise<void>;
    findProduct: (req: any, res: Response) => Promise<void>;
    sortByPrice: (req: Request, res: Response) => Promise<void>;
    sortByQuantity: (req: Request, res: Response) => Promise<void>;
    findBYPrice: (req: Request, res: Response) => Promise<void>;
    findByQuantity: (req: Request, res: Response) => Promise<void>;
    findCategory: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
