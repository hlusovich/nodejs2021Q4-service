import { Request, ServerRoute } from '@hapi/hapi';
import { server } from '../../app';
import { createRoute } from '../../../utils/routeCreater';
import { logIn } from './login.service';
import { UserModel } from '../../entity/user';
import { TokensModel } from '../../entity/tokens';

const routes: ServerRoute[] = [
  createRoute('POST', '/login', (req: Request):Promise<TokensModel|undefined> => logIn(req.payload as UserModel)),
];
server.route(routes);
export default server;
