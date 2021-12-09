import { Request, ServerRoute } from '@hapi/hapi';
import { server } from '../../app.js';
import { getAll, getUserById, createUser, deleteUser, updateUser } from './user.service.js';
import { createRoute } from '../../../utils/routeCreater.js';
import {User} from "./user.model";

const routes: ServerRoute[] = [createRoute('GET', '/users', () => getAll()),
  createRoute('GET', '/users/{id}', (req: Request) => getUserById(req.params.id)),
  createRoute('POST', '/users', (req: Request) => createUser(req.payload as User)),
  createRoute('PUT', '/users/{id}', (req: Request) => updateUser(req.params.id, req.payload as Omit<User, "password">)),
  createRoute('DELETE', '/users/{id}', (req: Request) => deleteUser(req.params.id))
];
server.route(routes);
export default server;
