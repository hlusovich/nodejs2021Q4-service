import { v4 } from 'uuid';

export class User {
  name: string;

  login: string;

  password: string;

  id: string;

  constructor({
    name, login, password, id,
  }: User) {
    this.id = id || v4();
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * return user without password
   * @param user:User; object with fields id, name, login
   * @returns user with deleted user password  Omit<IUser, 'password'>
   */
  static toResponse(user: User): Omit<User, 'password'> {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
