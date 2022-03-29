import { Response, Request } from 'express';
import ProductsService from '../services/productsService';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public async getAllProducts(_req: Request, res: Response) {
    const products = await this.productsService.getAllProducts();
    return res.status(200).json(products);
  }

  public async createProducts(req: Request, res: Response) {
    const { name, amount } = req.body;
    const create = await this.productsService.createProducts(name, amount);
    return res.status(201).json({ item: create });
  }
}