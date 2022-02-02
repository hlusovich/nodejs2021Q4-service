import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import {LoginModule} from "./login/login.module";

@Module({
  imports: [TasksModule, UsersModule, BoardsModule, LoginModule],
  controllers: [],
})
export class AppModule {}
