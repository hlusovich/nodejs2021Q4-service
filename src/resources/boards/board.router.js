const server = require('../../app');
const { getAll,getBoardById,createBoard,updateBoard,deleteBoard } = require('./board.service');
const createRoute = require('../../../utils/routeCreater');

const routes = [createRoute('GET', '/boards', () => getAll()),
  createRoute('GET', '/boards/{id}', (req) => getBoardById(req.params.id)),
  createRoute('POST', '/boards', (req) => createBoard(req.payload)),
  createRoute('PUT', '/boards/{id}', (req) => updateBoard(req.params.id, req.payload)),
  createRoute('DELETE', '/boards/{id}', (req) => deleteBoard(req.params.id))
];
server.route(routes);
module.exports = server;
