import usersController from './user.memory.repository.js';
import taskController from '../tasks/task.memory.repository.js';
import { UserControllerModel } from "../../controllers/userController.js";
const getAll = async () => await UserControllerModel.getAll();
;
const getUserById = async (id) => await UserControllerModel.getUserById(id);
const createUser = async (data) => {
    await UserControllerModel.createUser(usersController.createUser(data));
};
const updateUser = async (id, data) => await UserControllerModel.updateUser(id, data);
const deleteUser = async (id) => {
    taskController.unsubscribeUser(id);
    return await UserControllerModel.deleteUser(id);
};
export { getAll, getUserById, createUser, updateUser, deleteUser };
