import { Router } from 'express';
import productRouter from './productsRouter';
import usersRouter from './usersRouter';
import orderRouter from './orderRouter';

const router = Router();

router.use('/products', productRouter);
router.use('/users', usersRouter);
router.use('/orders', orderRouter);

export default router;