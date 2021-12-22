import {server} from './app.js';
import {PORT} from './common/config.js';
import user from './resources/users/user.router.js';
import board from './resources/boards/board.router.js';
import task from './resources/tasks/task.router.js';
const userRoutes = user;
const boardRoutes = board;
const taskRoutes = task;

/**
 * create server
 * @param there is no param
 * @returns Promise<void>
 */
async function startServer(): Promise<void> {
    await server.start();
  process.on("uncaughtException", ()=>{
  console.log('we have an '+'uncaughtException');
  });
    process.on("unhandledRejection", ()=>{
        console.log('we have an '+'unhandledRejection');
    });
    console.log(`Server successfully started on port ${PORT}`)
}

startServer();

