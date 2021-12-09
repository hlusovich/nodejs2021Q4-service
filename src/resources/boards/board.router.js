import { server } from '../../app.js';
import { getAll, getBoardById, createBoard, updateBoard, deleteBoard } from './board.service.js';
import { createRoute } from '../../../utils/routeCreater.js';

const routes = [createRoute('GET', '/boards', () => getAll()),
    createRoute('GET', '/boards/{id}', (req) => getBoardById(req.params.id)),
    createRoute('POST', '/boards', (req) => createBoard(req.payload)),
    createRoute('PUT', '/boards/{id}', (req) => updateBoard(req.params.id, req.payload)),
    createRoute('DELETE', '/boards/{id}', (req) => deleteBoard(req.params.id))
];
server.route(routes);
export default server;
