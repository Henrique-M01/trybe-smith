import { Response, Request } from 'express';
import OrderService from '../services/ordersService';

export default class OrdersController {
  constructor(private orderService = new OrderService()) {}

  public async getAllOrders(_req: Request, res: Response) {
    const orders = await this.orderService.getAllOrders();
    return res.status(200).json(orders);
  }
}