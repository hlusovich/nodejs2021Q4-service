import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put, Res, UseFilters, UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import {DeleteResult} from 'typeorm';
import {Response} from 'express';
import {TaskModel} from '../entity/task';
import {ITask, TaskDto} from './dto/task';
import {TaskService} from './task.service';
import {JwtAuthGuard} from '../guards/jwt-guard.guard';
import {LoggerGuard} from '../guards/logger-guard.guard';
import {MyException} from "../../Errors/MyException";
import {HttpExceptionFilter} from "../exceptionFilter/exceptionFilter";

@Controller('boards/:boardId/tasks')
export class TasksController {
    constructor(private taskService: TaskService) {
    }

    @Get()
    @UseGuards(JwtAuthGuard, LoggerGuard)
    async getAll(): Promise<ITask[]> {
        const result = await this.taskService.getAll();
        return result;
    }

    @Get(':id')
    @UseFilters(HttpExceptionFilter)
    @UseGuards(JwtAuthGuard, LoggerGuard)
    async getOne(@Param('id') id: string): Promise<ITask> {
        try {
            const result = await this.taskService.getOne(id);
            return result;
        } catch (e) {
            throw new MyException(e.message, e.myCode);
        }
    }

    @Post()
    @UseGuards(JwtAuthGuard, LoggerGuard)
    @HttpCode(HttpStatus.CREATED)
    async create(@Body(new ValidationPipe({transform: true})) taskDto: TaskDto, @Param('boardId') boardId: string): Promise<TaskModel | undefined> {
        const result = await this.taskService.create(taskDto, boardId);
        return result;
    }

    @Put(':id')
    @UseFilters(HttpExceptionFilter)
    @UseGuards(JwtAuthGuard, LoggerGuard)
    @HttpCode(HttpStatus.OK)
    async update(@Body(new ValidationPipe({transform: true})) taskDto: TaskDto, @Param('id') id: string): Promise<TaskModel | undefined> {
        try {
            const result = await this.taskService.update(taskDto, id);
            return result;
        } catch (e) {
            throw new MyException(e.message, e.myCode);
        }
    }

    @Delete(':id')
    @UseFilters(HttpExceptionFilter)
    @UseGuards(JwtAuthGuard, LoggerGuard)
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string): Promise<DeleteResult | undefined> {
        try {
            const result = await this.taskService.delete(id);
            return result;
        } catch (e) {
            throw new MyException(e.message, e.myCode);
        }
    }
}
