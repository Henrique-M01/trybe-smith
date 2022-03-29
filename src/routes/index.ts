import { Router } from 'express';
import productRouter from './productsRouter';

const router = Router();

router.use('/products', productRouter);

export default router;