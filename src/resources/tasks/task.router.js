import { server } from '../../app.js';
import { getAll, getTaskById, createTask, updateTask, deleteTask } from './task.service.js';
import { createRoute } from '../../../utils/routeCreater.js';

const routes = [createRoute('GET', '/boards/{id}/tasks', () => getAll()),
    createRoute('GET', '/boards/{id}/tasks/{taskId}', (req) => getTaskById(req.params.taskId)),
    createRoute('POST', '/boards/{id}/tasks', (req) => createTask(req.payload, req.params.id)),
    createRoute('PUT', '/boards/{id}/tasks/{taskId}', (req) => updateTask(req.params.taskId, req.payload)),
    createRoute('DELETE', '/boards/{id}/tasks/{taskId}', (req) => deleteTask(req.params.taskId))
];
server.route(routes);
export default server;
