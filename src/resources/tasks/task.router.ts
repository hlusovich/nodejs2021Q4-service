import { Request, ServerRoute } from '@hapi/hapi';
import { server } from '../../app';
import {
  getAll, getTaskById, createTask, updateTask, deleteTask,
} from './task.service';
import { createRoute } from '../../../utils/routeCreater';
import { Task } from './task.model';
import { ITask } from './interfaces';

const routes: ServerRoute[] = [createRoute('GET', '/boards/{id}/tasks', () => getAll()),
  createRoute('GET', '/boards/{id}/tasks/{taskId}', (req:Request) => getTaskById(req.params.taskId)),
  createRoute('POST', '/boards/{id}/tasks', (req:Request) => createTask(req.payload as ITask, req.params.id)),
  createRoute('PUT', '/boards/{id}/tasks/{taskId}', (req:Request) => updateTask(req.params.taskId, req.payload as ITask)),
  createRoute('DELETE', '/boards/{id}/tasks/{taskId}', (req:Request) => deleteTask(req.params.taskId)),
];
server.route(routes);
export default server;
