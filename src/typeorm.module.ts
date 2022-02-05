import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {DB, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRESS_PORT, SUPER_USER} from "../config";
import {TaskModel} from "./entity/task";
import {UserModel} from "./entity/user";
import {BoardModel} from "./entity/board";
import {TokensModel} from "./entity/tokens";
import {FileModel} from "./entity/file";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: POSTGRES_HOST,
            username: SUPER_USER,
            password: POSTGRES_PASSWORD,
            port: POSTGRESS_PORT,
            synchronize: true,
            database: DB,
            entities: [TaskModel, UserModel, BoardModel, TokensModel, FileModel],
            name:"nestJs"
        }),
    ],
})
export class TypeormModule {}
