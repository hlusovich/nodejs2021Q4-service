import {
  Body, Controller, Delete, Get,
  HttpCode, HttpStatus, Param, Post,
  Put, UseFilters, UseGuards,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UserDto } from './dto/user-dto';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../guards/jwt-guard.guard';
import { LoggerGuard } from '../guards/logger-guard.guard';
import { MyException } from '../../Errors/MyException';
import { HttpExceptionFilter } from '../exceptionFilter/exceptionFilter';
import { ValidationPipe } from '../validatorPipeline';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

    @Get()
    @UseGuards(JwtAuthGuard, LoggerGuard)
  async getAll() {
    const result = await this.usersService.getAll();
    return result;
  }

    @Get(':id')
    @UseFilters(HttpExceptionFilter)
    @UseGuards(JwtAuthGuard, LoggerGuard)
    async getOne(@Param('id') id: string) {
      try {
        const user = await this.usersService.getOne(id);
        return user;
      } catch (e) {
        throw new MyException(e.message, e.myCode);
      }
    }

    @Post()
    @UseGuards(JwtAuthGuard, LoggerGuard)
    @HttpCode(HttpStatus.CREATED)
    async create(@Body(new ValidationPipe()) userDto: UserDto):
        Promise<UserDto> {
      const result = await this.usersService.create(userDto);
      return result;
    }

    @Put(':id')
    @UseFilters(HttpExceptionFilter)
    @UseGuards(JwtAuthGuard, LoggerGuard)
    @HttpCode(HttpStatus.OK)
    async update(@Body(new ValidationPipe()) userDto: UserDto, @Param('id') id: string): Promise<UpdateResult | undefined> {
      try {
        const result = await this.usersService.update(userDto, id);
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
        const result = await this.usersService.delete(id);
        return result;
      } catch (e) {
        throw new MyException(e.message, e.myCode);
      }
    }
}
