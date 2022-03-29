import { Request, Response, Router } from 'express';
import OrdersController from '../controllers/orderController';

const router = Router();

const ordersController = new OrdersController();

router.get(
  '/',
  (req: Request, res: Response) =>
    ordersController.getAllOrders(req, res),
);

export default router;