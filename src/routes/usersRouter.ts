import { Request, Response, Router } from 'express';
import UsersController from '../controllers/usersController';
import validateUsers from '../middlewares/validateBodyUser';

const router = Router();

const usersController = new UsersController();

router.post(
  '/', 
  validateUsers,
  (req: Request, res: Response) =>
    usersController.createUsers(req, res),
);

export default router;