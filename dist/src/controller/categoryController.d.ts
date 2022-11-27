import { Request, Response } from "express";
declare class CategoryController {
    saveCategory: (req: Request, res: Response) => Promise<void>;
    showCategories: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CategoryController;
export default _default;
