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
    ValidationPipe,
} from '@nestjs/common';
import {BoardsModelController, IBoard} from "../controllers/boardContoller";
import {BoardDto} from "./boardDto/boardDto";
import {DeleteResult, UpdateResult} from "typeorm";
import {TaskModelController} from "../controllers/taskController";
import { Response } from 'express';
import {errorHandler} from "../../utils/errorHandler";


@Controller('boards')
export class BoardsController {
    @Get()
    async getAll() {
        const result = await BoardsModelController.getAll();
        return result;
    }

    @Get(':id')
    async getOne(@Param('id') id: string,  @Res({ passthrough: true }) res: Response): Promise<IBoard | undefined> {
        try{
            const result = await BoardsModelController.getBoardById(id);
            return result;
        }
        catch (e) {
            res.status(errorHandler(e))
        }
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body(new ValidationPipe({transform: true})) boardDto: BoardDto): Promise<BoardDto | undefined> {
        const result = await BoardsModelController.createBoard(boardDto);
        return result;
    }

    @Put(":id")
    @HttpCode(HttpStatus.OK)
    async update(@Body(new ValidationPipe({transform: true})) boardDto: BoardDto, @Param('id') id: string): Promise<UpdateResult | undefined> {
        const result = await BoardsModelController.updateBoard(id, boardDto);
        return result;
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string, @Res({ passthrough: true }) res: Response): Promise<DeleteResult | undefined> {
        const deleteResult = await BoardsModelController.deleteBoard(id);
        await TaskModelController.unsubcribeBoard(id);
        if(deleteResult.affected===0) {
            res.status(HttpStatus.NOT_FOUND);
        }
        return deleteResult;
    }
}
