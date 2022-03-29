import IProducts from '../interfaces/IProducts';
import ProductsModel from '../models/productsModel';
import connection from '../models/connection';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAllProducts(): Promise<IProducts[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async createProducts(name: string, amount: string): Promise<IProducts> {
    const create = await this.model.create(name, amount);
    return create;
  }
}