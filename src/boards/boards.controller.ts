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
import {DeleteResult, UpdateResult} from 'typeorm';
import {Response} from 'express';
import {BoardDto} from './boardDto/boardDto';
import {BoardService} from './board.service';
import {JwtAuthGuard} from '../guards/jwt-guard.guard';
import {IBoard} from '../controllers/boardContoller';
import {LoggerGuard} from '../guards/logger-guard.guard';
import {HttpExceptionFilter} from "../exceptionFilter/exceptionFilter";
import {MyException} from "../../Errors/MyException";

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardService) {

    }

    @Get()
    @UseGuards(JwtAuthGuard, LoggerGuard)
    async getAll() {
        const result = await this.boardsService.getAll();
        return result;
    }

    @Get(':id')
    @UseFilters(HttpExceptionFilter)
    @UseGuards(JwtAuthGuard, LoggerGuard)
    async getOne(@Param('id') id: string, @Res({passthrough: true}) res: Response): Promise<IBoard | undefined> {
        try {
            const result = await this.boardsService.getOne(id, res);
            return result;
        } catch (e) {
            throw new MyException(e.message, e.myCode);
        }

    }

    @Post()
    @UseGuards(JwtAuthGuard, LoggerGuard)
    @HttpCode(HttpStatus.CREATED)
    async create(@Body(new ValidationPipe({transform: true})) boardDto: BoardDto)
        : Promise<BoardDto | undefined> {
        const result = await this.boardsService.create(boardDto);
        return result;
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard, LoggerGuard)
    @UseFilters(HttpExceptionFilter)
    @HttpCode(HttpStatus.OK)
    async update(@Body(new ValidationPipe({transform: true})) boardDto: BoardDto, @Param('id') id: string): Promise<UpdateResult | undefined> {
        try {
            const result = await this.boardsService.update(boardDto, id);
            return result;
        } catch (e) {
            throw new MyException(e.message, e.myCode);

        }

    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, LoggerGuard)
    @UseFilters(HttpExceptionFilter)
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string, @Res({passthrough: true}) res: Response): Promise<DeleteResult | undefined> {
        try {
            const deleteResult = await this.boardsService.delete(id, res);
            return deleteResult;
        } catch (e) {
            throw new MyException(e.message, e.myCode);
        }

    }
}
