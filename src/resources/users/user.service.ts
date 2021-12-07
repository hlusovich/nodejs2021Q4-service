import usersController from './user.memory.repository.js';
import taskController  from '../tasks/task.memory.repository.js';

interface IUser {
  name: string;
  login: string;
  id: string,
  password:string
}
/**
 * return  Array of users without password
 * @param there is no param
 * @returns  Omit<IUser, 'password'>[]
 */

const getAll = () => usersController.getAll();
/**
 * return  User by id
 * @param id:string
 * @returns Omit<IUser, 'password'>  or if no Task with such id throw error
 */
const getUserById = (id:string) => usersController.getUser(id);

/**
 * return  Fresh created User
 * @param payload object with  fields name: string; login: string; password: string; id: string
 * @returns Omit<IUser, 'password'>
 */
const createUser = (data:IUser) => usersController.createUser(data);
/**
 * return  Fresh updated user
 * @param id:string
 * @param payload object with  fields name: string; login: string; password: string; id: string
 * @returns Omit<IUser, 'password'> or throw Error
 */

const updateUser = (id:string, data:Omit<IUser, "password">) => usersController.updateUser(id, data);
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

