import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [TasksModule, UsersModule, BoardsModule],
  controllers: [],
})
export class AppModule {}
