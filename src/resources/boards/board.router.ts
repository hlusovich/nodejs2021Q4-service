import {Request,ServerRoute} from '@hapi/hapi'
import  {server}  from '../../app.js';
import { getAll,getBoardById,createBoard,updateBoard,deleteBoard } from './board.service.js';
import {createRoute} from '../../../utils/routeCreater.js';

interface IColumn {
  id: string;
  title: string;
  order: number
}
export interface IBoardToResponse {
  title: string;
  id: string;
  columns: IColumn[],
}


const routes: ServerRoute[] = [createRoute('GET', '/boards', () => getAll()),
  createRoute('GET', '/boards/{id}', (req:Request) => getBoardById(req.params.id)),
  createRoute('POST', '/boards', (req:Request) => createBoard(req.payload as IBoardToResponse)),
  createRoute('PUT', '/boards/{id}', (req:Request) => updateBoard(req.params.id, req.payload as IBoardToResponse)),
  createRoute('DELETE', '/boards/{id}', (req:Request) => deleteBoard(req.params.id))
];
server.route(routes);
export default server;
