import { Request, ServerRoute } from '@hapi/hapi';
import { server } from '../../app';
import {
  getAll, getUserById, createUser, deleteUser, updateUser,
} from './user.service';
import { createRoute } from '../../../utils/routeCreater';
import { User } from './user.model';

const routes: ServerRoute[] = [createRoute('GET', '/users', async () => {
  console.log(12324);
  const response = await getAll();
  return response;
}),
createRoute('GET', '/users/{id}', async (req: Request) => {
  const response = await getUserById(req.params.id);
  return response;
}),
createRoute('POST', '/users', async (req: Request) => {
  const response = await createUser(req.payload as User);
  return response;
}),
createRoute('PUT', '/users/{id}', async (req: Request) => {
  const response = await updateUser(req.params.id, req.payload as Omit<User, 'password'>);
  return response;
}),
createRoute('DELETE', '/users/{id}', async (req: Request) => {
  const response = await deleteUser(req.params.id);
  return response;
}),
];
server.route(routes);
export default server;
