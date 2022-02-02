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
import {DeleteResult, UpdateResult} from 'typeorm';
import {Response} from 'express';
import {BoardsModelController, IBoard} from '../controllers/boardContoller';
import {BoardDto} from './boardDto/boardDto';
import {TaskModelController} from '../controllers/taskController';
import {errorHandler} from '../../utils/errorHandler';
import {BoardService} from './board.service';
import {JwtAuthGuard} from "../guard/jwt-guard.guard";

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardService) {

    }

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAll() {
        const result = await this.boardsService.getAll();
        return result;
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getOne(@Param('id') id: string, @Res({passthrough: true}) res: Response): Promise<IBoard | undefined> {
        const result = await this.boardsService.getOne(id, res);
        return result;
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.CREATED)
    async create(@Body(new ValidationPipe({transform: true})) boardDto: BoardDto)
        : Promise<BoardDto | undefined> {
        const result = await this.boardsService.create(boardDto);
        return result;
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    async update(@Body(new ValidationPipe({transform: true})) boardDto: BoardDto, @Param('id') id: string): Promise<UpdateResult | undefined> {
        const result = await this.boardsService.update(boardDto, id);
        return result;
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string, @Res({passthrough: true}) res: Response): Promise<DeleteResult | undefined> {
        const deleteResult = await this.boardsService.delete(id, res);
        return deleteResult;
    }
}
