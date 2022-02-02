import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put, Res,
    ValidationPipe
} from '@nestjs/common';
import {DeleteResult} from "typeorm";
import {TaskModel} from "../entity/task";
import {Error404} from "../../Errors/404error";
import {ITask, TaskDto} from "./dto/task";
import {TaskModelController} from "../controllers/taskController";
import {BoardDto} from "../boards/boardDto/boardDto";
import {BoardsModelController, IBoard} from "../controllers/boardContoller";
import {Response} from "express";
import {errorHandler} from "../../utils/errorHandler";


@Controller('boards/:boardId/tasks')
export class TasksController {
    @Get()
    async getAll(): Promise<ITask[]> {
        const result = await TaskModel.query('SELECT * FROM tasks');
        return result;
    }

    @Get(':id')
    async getOne(@Param("id") id: string, @Res({passthrough: true}) res: Response) {
        try {
            const tasks = await this.getAll();
            const task = tasks.find((item) => item.id === id);
            if(!task){
                throw  new Error404("no such task")
            }
            return task;
        } catch (e) {
            res.status(errorHandler(e))
        }
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body(new ValidationPipe({transform: true})) taskDto: TaskDto, @Param("boardId") boardId: string): Promise<TaskModel | undefined> {
        const result = await TaskModelController.createTask({...taskDto, boardId});
        return result;
    }

    @Put(":id")
    @HttpCode(HttpStatus.OK)
    async update(@Body(new ValidationPipe({transform: true})) taskDto: TaskDto, @Param('id') id: string): Promise<TaskModel | undefined> {
        const result = await TaskModelController.updateTask(id, taskDto);
        return result;
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string, @Res({passthrough: true}) res: Response): Promise<DeleteResult | undefined> {
        const result = await TaskModelController.deleteTask(id);
        return result;

    }

}
