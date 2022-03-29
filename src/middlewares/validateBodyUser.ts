import { Request, Response, NextFunction } from 'express';
import userSchema from '../schemas/usersSchema';

async function validateUsers(req: Request, _res: Response, next: NextFunction) {
  try {
    await userSchema.validateAsync(req.body);

    return next();
  } catch (e) {
    return next(e);
  }
}

export default validateUsers;