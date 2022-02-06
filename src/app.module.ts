import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { LoginModule } from './login/login.module';
import {FileModule} from "./file/file.module";
import {TypeormModule} from "./typeorm.module";
import {TokensModule} from "./token/tokens.module";

@Module({
  imports: [TasksModule, UsersModule, BoardsModule, LoginModule, FileModule, TypeormModule,TokensModule],
  controllers: [],
})
export class AppModule {}
