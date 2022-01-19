import { Request, ServerRoute } from '@hapi/hapi';
import { server } from '../../app.js';
import {
  getAll, getBoardById, createBoard, updateBoard, deleteBoard,
} from './board.service.js';
import { createRoute } from '../../../utils/routeCreater.js';
import { Board } from './board.model';

const routes: ServerRoute[] = [createRoute('GET', '/boards', () => getAll()),
  createRoute('GET', '/boards/{id}', (req:Request) => getBoardById(req.params.id)),
  createRoute('POST', '/boards', (req:Request) => createBoard(req.payload as Omit<Board, 'toResponse'>)),
  createRoute('PUT', '/boards/{id}', (req:Request) => updateBoard(req.params.id, req.payload as Board)),
  createRoute('DELETE', '/boards/{id}', (req:Request) => deleteBoard(req.params.id)),
];
server.route(routes);
export default server;
