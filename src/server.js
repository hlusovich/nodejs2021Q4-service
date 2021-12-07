import { server } from './app.js';
import { PORT } from './common/config.js';

async function startServer() {
    await server.start();
    console.log(`Server successfully started on port ${PORT}`);
}
startServer();
