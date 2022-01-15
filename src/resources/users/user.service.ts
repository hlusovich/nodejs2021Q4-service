import usersController from './user.memory.repository.js';
import taskController from '../tasks/task.memory.repository.js';
import {User} from "./user.model";
import {UserControllerModel} from "../../controllers/userController.js";
import {DeleteResult} from "typeorm";
import { TaskModelController } from '../../controllers/taskController';


/**
 * return  Array of users without password
 * @param there is no param
 * @returns  Omit<User, 'password'>[]
 */

const getAll = async () => await UserControllerModel.getAll();
;
/**
 * return  User by id
 * @param id:string
 * @returns Omit<User, 'password'>  or if no Task with such id throw error
 */
const getUserById = async (id: string) => await UserControllerModel.getUserById(id);

/**
 * return  Fresh created User
 * @param payload object with  fields name: string; login: string; password: string; id: string
 * @returns Omit<User, 'password'>
 */
const createUser = async (data: User) =>{
    await UserControllerModel.createUser(usersController.createUser(data))};
/**
 * return  Fresh updated user
 * @param id:string
 * @param payload object with  fields name: string; login: string; password: string; id: string
 * @returns Omit<User, 'password'> or throw Error
 */

const updateUser = async (id: string, data: Omit<User, "password">) => await UserControllerModel.updateUser(id, data);
/**
 * Delete user by id
 * @param id:string
 * @returns string with deleted user id
 */
const deleteUser = async (id: string): Promise<DeleteResult> => {
    await TaskModelController.unsubscribeUser(id);
    return await UserControllerModel.deleteUser(id);
};

export {getAll, getUserById, createUser, updateUser, deleteUser};

