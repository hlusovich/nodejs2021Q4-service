const Task = require('./task.model');
const Error404 = require('../../../Errors/404error');


class TasksController {
  constructor() {
    this.tasks = [];
  }

  getAll() {
    return this.tasks;
  }

  getTask(id) {
    const task = this.tasks.find(item => item.id === id);
    if (task) {
      return task;
    }
    throw Error404('Not found');

  }

  createTask(payload,boardId) {
    const newTask = new Task({...payload, boardId});
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id, payload) {
    let newTask = null;
    this.tasks = this.tasks.map(item => {
      if (item.id === id) {
        newTask = new Task({ ...item, ...payload });
        return newTask;
      }
      return item;
    });
    return newTask;
  }

  deleteTask(id) {
    if (this.getTask(id)) {
      this.tasks = this.tasks.filter(item => item.id !== id);
      return;
    }
    throw Error404('Not found');

  }

  unsubscribeUser(id) {
    this.tasks = this.tasks.map(item => {
      if (item.userId === id) {
        return { ...item, userId: null };
      }
      return item;
    });
  }

  unsubscribeBoard(id) {
    this.tasks = this.tasks.filter(item => item.boardId !== id);
  }
}

module.exports = new TasksController();
