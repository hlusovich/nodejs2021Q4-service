import { server } from './app.js';
import { PORT } from './common/config.js';
import user from './resources/users/user.router.js';
import board from './resources/boards/board.router.js';
import task from './resources/tasks/task.router.js';

const userRoutes = user;
const boardRoutes = board;
const taskRoutes = task;
async function startServer() {
    await server.start();
    console.log(`Server successfully started on port ${PORT}`);
}
startServer();
