import {server} from './app.js';
import {PORT} from '../config.js';
import user from './resources/users/user.router.js';
import board from './resources/boards/board.router.js';
import task from './resources/tasks/task.router.js';
import Logger from "../utils/Logger.js";
import {ConnectionOptions} from "typeorm";
import {createConnection} from '../node_modules/typeorm/globals.js'
import {User} from './student.js'

const options: ConnectionOptions = {
    type: "postgres",
    host: "localhost",
    username: "nikita3",
    password: "7081379",
    port: 5432,
    database: "Studetns",
    entities: [User],
};

async function createDBconnection() {
    await createConnection(options).then(async ()=>{await startServer();});
    const client = await User.create({id: 666, first_name: "artem", last_name: 'fish', age: 900});
    console.log("client")
    client.save();

}

const userRoutes = user;
const boardRoutes = board;
const taskRoutes = task;
createDBconnection();
/**
 * create server
 * @param there is no param
 * @returns Promise<void>
 */
async function startServer(): Promise<void> {
    await server.start();
  process.on("uncaughtException", ()=>{
      Logger.log({message:'we have an uncaughtException', level:0})
  });
    process.on("unhandledRejection", (error)=>{
        console.log(error)
        Logger.log({level:0, message:'we have an unhandledRejection'});
    });
    Logger.log({level:2, message:`Server successfully started on port ${PORT}`});
}



