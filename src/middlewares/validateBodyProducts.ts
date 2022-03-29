import { Request, Response, NextFunction } from 'express';
import productsSchema from '../schemas/productsScheme';

async function validateProducts(req: Request, _res: Response, next: NextFunction) {
  try {
    await productsSchema.validateAsync(req.body);

    return next();
  } catch (e) {
    return next(e);
  }
}

export default validateProducts;
