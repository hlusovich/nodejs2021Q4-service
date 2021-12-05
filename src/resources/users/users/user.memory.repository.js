const User = require('./user.model');

class UserController {
  constructor(users = []) {
    this.users = users;
  }

  getAll() {
    return this.users.map(item => User.toResponse(item));
  }

  getUser(id) {
    return User.toResponse(this.users.find(item => item.id === id));
  }

  createUser(payload) {
    const user = new User(payload);
    this.users.push(user);
    return User.toResponse(user);
  }

  updateUser(id, payload) {
    let  user = null;
    this.users = this.users.map(item => {
      if (item.id === id) {
        user = new User({ ...item, ...payload });
        return user;
      }
      return item;
    });
    return User.toResponse(user);
  }

  deleteUser(id) {
    this.users = this.users.filter(item => item.id !== id);
    return `User with ${id} was successfully  deleted`;
  }
}

module.exports = new UserController();
