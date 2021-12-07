import { v4 } from 'uuid';

interface IUser {
  name: string;
  login: string;
  password: string;
  id: string
}

export class User {
  name: string;

  login: string;

  password: string;

  id: string;

  constructor({ name, login, password, id }: IUser) {
    this.id = id || v4();
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * return user without password
   * @param user:IUser
   * @returns user with deleted user password  Omit<IUser, 'password'>
   */
  static toResponse(user: IUser): Omit<IUser, 'password'> {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

