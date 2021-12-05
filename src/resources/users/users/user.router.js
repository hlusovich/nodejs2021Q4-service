const server = require('../../app');
const { getAll, getUserById, createUser, deleteUser, updateUser } = require('./user.service');
const createRoute = require('../../../utils/routeCreater');

const routes = [createRoute('GET', '/users', () => getAll()),
  createRoute('GET', '/users/{id}', (req) => getUserById(req.params.id)),
  createRoute('POST', '/users', (req) => createUser(req.payload)),
  createRoute('PUT', '/users/{id}', (req) => updateUser(req.params.id, req.payload)),
  createRoute('DELETE', '/users/{id}', (req) => deleteUser(req.params.id))
];
server.route(routes);
module.exports = server;
