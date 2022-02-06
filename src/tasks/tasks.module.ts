import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TaskService } from './task.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TaskModel} from "../entity/task";
import {UserModel} from "../entity/user";

@Module({
  controllers: [TasksController],
  providers: [TaskService],
  imports: [TypeOrmModule.forFeature([TaskModel, UserModel], "nestJs")]
})
export class TasksModule {}
