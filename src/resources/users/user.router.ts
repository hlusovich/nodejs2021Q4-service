import { Request, ServerRoute } from '@hapi/hapi';
import { server } from '../../app.js';
import { getAll, getUserById, createUser, deleteUser, updateUser } from './user.service.js';
import { createRoute } from '../../../utils/routeCreater.js';
import {User} from "./user.model";

const routes: ServerRoute[] = [createRoute('GET', '/users', async () =>  await getAll()),
  createRoute('GET', '/users/{id}', async (req: Request) => await getUserById(req.params.id)),
  createRoute('POST', '/users', async (req: Request) => await createUser(req.payload as User)),
  createRoute('PUT', '/users/{id}', async (req: Request) => await updateUser(req.params.id, req.payload as Omit<User, "password">)),
  createRoute('DELETE', '/users/{id}', async (req: Request) =>await deleteUser(req.params.id))
];
server.route(routes);
export default server;
