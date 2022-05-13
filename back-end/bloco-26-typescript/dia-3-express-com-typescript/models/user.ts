import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IUser from '../types/IUser';

export default class UserModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<IUser[]> {
    const [users] = await this.connection.execute('SELECT * FROM Users');

    return users as IUser[];
  }
};
