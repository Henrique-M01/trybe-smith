import { Request, Response, Router } from 'express';
import ProductsController from '../controllers/productsController';
import validateProducts from '../middlewares/validateBodyProducts';

const router = Router();

const productsController = new ProductsController();

router.get(
  '/', 
  (req: Request, res: Response) => 
    productsController.getAllProducts(req, res),
);

router.post(
  '/',
  validateProducts,
  (req: Request, res: Response) => 
    productsController.createProducts(req, res),
);

export default router;
