import {ConnectionOptions, createConnection} from "typeorm";
import {DB, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRESS_PORT, SUPER_USER} from "../config";
import {TaskModel} from "../src/entity/task";
import {UserModel} from "../src/entity/user";
import {BoardModel} from "../src/entity/board";
import {TokensModel} from "../src/entity/tokens";
import {FileModel} from "../src/entity/file";
import {UserControllerModel} from "./controllers/userController";

const testUser = { login: 'admin', name: 'admin', password: 'admin', id:"1" };
const options: ConnectionOptions = {
    type: 'postgres',
    host: POSTGRES_HOST,
    username: SUPER_USER,
    password: POSTGRES_PASSWORD,
    port: POSTGRESS_PORT,
    synchronize: true,
    database: DB,
    entities: [TaskModel, UserModel, BoardModel, TokensModel, FileModel],
};
export async function createSuperUser() {
    await createConnection(options).then(async (serverInstance) => {
        if(!await UserControllerModel.getUserById("1")){
            await UserControllerModel.createUser(testUser);
        }

    });

}
