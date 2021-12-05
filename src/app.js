const Hapi = require('@hapi/hapi');
const { PORT } = require('./common/config');

const server = new Hapi.Server({port: PORT, host: 'localhost',
  "routes": {
    "cors": true
  }});
module.exports = server;
