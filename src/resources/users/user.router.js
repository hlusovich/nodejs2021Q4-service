import { server } from '../../app.js';
import { getAll, getUserById, createUser, deleteUser, updateUser } from './user.service.js';
import { createRoute } from '../../../utils/routeCreater.js';
const routes = [createRoute('GET', '/users', async () => await getAll()),
    createRoute('GET', '/users/{id}', async (req) => await getUserById(req.params.id)),
    createRoute('POST', '/users', async (req) => await createUser(req.payload)),
    createRoute('PUT', '/users/{id}', async (req) => await updateUser(req.params.id, req.payload)),
    createRoute('DELETE', '/users/{id}', async (req) => await deleteUser(req.params.id))
];
server.route(routes);
export default server;
