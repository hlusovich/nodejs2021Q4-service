import { server } from '../../app.js';
import { getAll, getUserById, createUser, deleteUser, updateUser } from './user.service.js';
import { createRoute } from '../../../utils/routeCreater.js';

const routes = [createRoute('GET', '/users', () => getAll()),
    createRoute('GET', '/users/{id}', (req) => getUserById(req.params.id)),
    createRoute('POST', '/users', (req) => createUser(req.payload)),
    createRoute('PUT', '/users/{id}', (req) => updateUser(req.params.id, req.payload)),
    createRoute('DELETE', '/users/{id}', (req) => deleteUser(req.params.id))
];
server.route(routes);
export default server;
