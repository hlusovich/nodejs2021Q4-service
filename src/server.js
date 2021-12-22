import { server } from './app.js';
import { PORT } from '../config.js';
import user from './resources/users/user.router.js';
import board from './resources/boards/board.router.js';
import task from './resources/tasks/task.router.js';
import Logger from "../utils/Logger.js";
const userRoutes = user;
const boardRoutes = board;
const taskRoutes = task;
async function startServer() {
    await server.start();
    process.on("uncaughtException", () => {
        Logger.log({ message: 'we have an ' + 'uncaughtException', level: 0 });
    });
    process.on("unhandledRejection", () => {
        Logger.log({ level: 0, message: 'we have an ' + 'unhandledRejection' });
    });
    Promise.reject(Error('Oops!'));
    Logger.log({ level: 2, message: `Server successfully started on port ${PORT}` });
}
startServer();
