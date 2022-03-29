import OrderModel from '../models/orderModel';
import connection from '../models/connection';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrders() {
    const result = await this.model.getAllOrders();

    const data = result.map((order) => ({ ...order, products: [order.products] }));

    return data;
  }
}