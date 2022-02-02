import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put, Res, UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { Response } from 'express';
import { TaskModel } from '../entity/task';
import { ITask, TaskDto } from './dto/task';
import { TaskService } from './task.service';
import {JwtAuthGuard} from "../guard/jwt-guard.guard";

@Controller('boards/:boardId/tasks')
export class TasksController {
  constructor(private taskService:TaskService) {

  }

    @Get()
    @UseGuards(JwtAuthGuard)
  async getAll(): Promise<ITask[]> {
    const result = await this.taskService.getAll();
    return result;
  }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getOne(@Param('id') id: string, @Res({ passthrough: true }) res: Response):Promise<ITask> {
      const result = await this.taskService.getOne(id, res);
      return result;
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.CREATED)
    async create(@Body(new ValidationPipe({ transform: true })) taskDto: TaskDto, @Param('boardId') boardId: string): Promise<TaskModel | undefined> {
      const result = await this.taskService.create(taskDto, boardId);
      return result;
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    async update(@Body(new ValidationPipe({ transform: true })) taskDto: TaskDto, @Param('id') id: string): Promise<TaskModel | undefined> {
      const result = await this.taskService.update(taskDto, id);
      return result;
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string, @Res({ passthrough: true }) res: Response): Promise<DeleteResult | undefined> {
      const result = await this.taskService.delete(id, res);
      return result;
    }
}
