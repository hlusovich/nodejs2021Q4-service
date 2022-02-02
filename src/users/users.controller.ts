import {
  Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards, ValidationPipe,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UserDto } from './dto/user-dto';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../guards/jwt-guard.guard';
import { LoggerGuard } from '../guards/logger-guard.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService:UsersService) {

  }

    @Get()
    @UseGuards(JwtAuthGuard, LoggerGuard)
  async getAll() {
    const result = await this.usersService.getAll();
    return result;
  }

    @Get(':id')
    @UseGuards(JwtAuthGuard, LoggerGuard)
    async getOne(@Param('id') id: string) {
      const user = await this.usersService.getOne(id);
      return user;
    }

    @Post()
    @UseGuards(JwtAuthGuard, LoggerGuard)
    @HttpCode(HttpStatus.CREATED)
    async create(@Body(new ValidationPipe({ transform: true })) userDto: UserDto):
        Promise<UserDto> {
      const result = await this.usersService.create(userDto);
      return result;
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard, LoggerGuard)
    @HttpCode(HttpStatus.OK)
    async update(@Body(new ValidationPipe({ transform: true })) userDto: UserDto, @Param('id') id: string): Promise<UpdateResult | undefined> {
      const result = await this.usersService.update(userDto, id);
      return result;
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, LoggerGuard)
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string): Promise<DeleteResult | undefined> {
      const result = await this.usersService.delete(id);
      return result;
    }
}
