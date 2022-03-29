import { Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import UsersService from '../services/usersService';

export default class UsersController {
  constructor(private usersService = new UsersService()) {}

  public async createUsers(req: Request, res: Response) {
    const user = req.body;
    await this.usersService.createUser(user);
    const token = jwt.sign({ data: user }, 'batatinha123', { expiresIn: '7d' });
    return res.status(201).json({ token });
  }
}