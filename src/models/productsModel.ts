import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProducts from '../interfaces/IProducts';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProducts[]> {
    const [products] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return products as IProducts[];
  }

  public async create(name: string, amount: string): Promise<IProducts> {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const { insertId } = result;
    return { id: insertId, name, amount };
  }
}