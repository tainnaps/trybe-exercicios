import UserModel from '../models/user';

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel();
  }
};
