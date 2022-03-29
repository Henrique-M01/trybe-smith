import { Router } from 'express';
import productRouter from './productsRouter';
import usersRouter from './usersRouter';

const router = Router();

router.use('/products', productRouter);
router.use('/users', usersRouter);

export default router;