import { DeleteResult } from 'typeorm';
import {UserController} from './user.memory.repository.js';
import { User } from './user.model';
import { UserControllerModel } from '../../controllers/userController.js';
import { TaskModelController } from '../../controllers/taskController';

/**
 * return  Array of users without password
 * @param there is no param
 * @returns  Omit<User, 'password'>[]
 */

const getAll = async () => {
  const result = await UserControllerModel.getAll();
  return result;
};

/**
 * return  User by id
 * @param id:string
 * @returns Omit<User, 'password'>  or if no Task with such id throw error
 */
const getUserById = async (id: string) => {
  const result = await UserControllerModel.getUserById(id);
  return result;
};

/**
 * return  Fresh created User
 * @param payload object with  fields name: string; login: string; password: string; id: string
 * @returns Omit<User, 'password'>
 */
const createUser = async (data: User) => {
  const result = await UserControllerModel.createUser(UserController.createUser(data));
  return result;
};
/**
 * return  Fresh updated user
 * @param id:string
 * @param payload object with  fields name: string; login: string; password: string; id: string
 * @returns Omit<User, 'password'> or throw Error
 */

const updateUser = async (id: string, data: Omit<User, 'password'>) => {
  const result = await UserControllerModel.updateUser(id, data);
  return result;
};
/**
 * Delete user by id
 * @param id:string
 * @returns string with deleted user id
 */
const deleteUser = async (id: string): Promise<DeleteResult> => {
  await TaskModelController.unsubscribeUser(id);
  const result = await UserControllerModel.deleteUser(id);
  return result;
};

export {
  getAll, getUserById, createUser, updateUser, deleteUser,
};
