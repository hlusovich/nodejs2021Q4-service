import {server} from '../../app.js';
import { getAll, getTaskById, createTask, updateTask, deleteTask } from './task.service.js';
import {createRoute} from '../../../utils/routeCreater.js';
import {Request,ServerRoute} from '@hapi/hapi'
import { Task } from './task.model';

 const routes: ServerRoute[] = [createRoute('GET', '/boards/{id}/tasks', () => getAll()),
  createRoute('GET', '/boards/{id}/tasks/{taskId}', (req:Request) => getTaskById(req.params.taskId)),
  createRoute('POST', '/boards/{id}/tasks', (req:Request) => createTask(req.payload as Task,req.params.id)),
  createRoute('PUT', '/boards/{id}/tasks/{taskId}', (req:Request) => updateTask(req.params.taskId, req.payload as Task)),
  createRoute('DELETE', '/boards/{id}/tasks/{taskId}', (req:Request) => deleteTask(req.params.taskId))
];
server.route(routes);
export default server;

