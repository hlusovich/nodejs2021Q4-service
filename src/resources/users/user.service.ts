import usersController from './user.memory.repository.js';
import taskController  from '../tasks/task.memory.repository.js';
import {User} from "./user.model";

/**
 * return  Array of users without password
 * @param there is no param
 * @returns  Omit<User, 'password'>[]
 */

const getAll = () => usersController.getAll();
/**
 * return  User by id
 * @param id:string
 * @returns Omit<User, 'password'>  or if no Task with such id throw error
 */
const getUserById = (id:string) => usersController.getUser(id);

/**
 * return  Fresh created User
 * @param payload object with  fields name: string; login: string; password: string; id: string
 * @returns Omit<User, 'password'>
 */
const createUser = (data:User) => usersController.createUser(data);
/**
 * return  Fresh updated user
 * @param id:string
 * @param payload object with  fields name: string; login: string; password: string; id: string
 * @returns Omit<User, 'password'> or throw Error
 */

const updateUser = (id:string, data:Omit<User, "password">) => usersController.updateUser(id, data);
/**
 * Delete user by id
 * @param id:string
 * @returns string with deleted user id
 */
const deleteUser = (id:string):string => {
  taskController.unsubscribeUser(id);
  return  usersController.deleteUser(id);
};

export { getAll, getUserById, createUser, updateUser, deleteUser };

