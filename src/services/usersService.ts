import IUser from '../interfaces/IUser';
import UsersModel from '../models/usersModels';
import connection from '../models/connection';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async createUser(user: IUser) {
    await this.model.createUser(user);
  }
}