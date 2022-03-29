import { Request, Response, Router } from 'express';
import ProductsController from '../controllers/productsController';

const router = Router();

const productsController = new ProductsController();

router.get(
  '/', 
  (req: Request, res: Response) => 
    productsController.getAllProducts(req, res),
);

export default router;
