import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './tasks.controller';
import { TaskService } from './task.service';
import { TaskModel } from '../entity/task';
import { UserModel } from '../entity/user';

@Module({
  controllers: [TasksController],
  providers: [TaskService],
  imports: [TypeOrmModule.forFeature([TaskModel, UserModel], 'nestJs')],
})
export class TasksModule {}
