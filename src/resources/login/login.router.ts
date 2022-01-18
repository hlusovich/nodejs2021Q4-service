import { Request, ServerRoute } from '@hapi/hapi';
import { server } from '../../app.js';
import { createRoute } from '../../../utils/routeCreater.js';
import { logIn } from './login.service';
import { UserModel } from '../../entity/user';


const routes: ServerRoute[] = [
  createRoute('POST', '/login', (req: Request) => logIn(req.payload as UserModel))
];
server.route(routes);
export default server;
