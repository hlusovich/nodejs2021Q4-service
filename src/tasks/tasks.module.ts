import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TaskService } from './task.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TaskModel} from "../entity/task";

@Module({
  controllers: [TasksController],
  providers: [TaskService],
  imports: [TypeOrmModule.forFeature([TaskModel], "nestJs")]
})
export class TasksModule {}
