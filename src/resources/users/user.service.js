import usersController from './user.memory.repository.js';
import taskController from '../tasks/task.memory.repository.js';

const getAll = () => usersController.getAll();
const getUserById = (id) => usersController.getUser(id);
const createUser = (data) => usersController.createUser(data);
const updateUser = (id, data) => usersController.updateUser(id, data);
const deleteUser = (id) => {
    taskController.unsubscribeUser(id);
    return usersController.deleteUser(id);
};
export { getAll, getUserById, createUser, updateUser, deleteUser };
