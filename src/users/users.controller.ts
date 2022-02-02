import {
  Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, ValidationPipe,
} from '@nestjs/common';
import { hash } from 'bcrypt';
import { DeleteResult, UpdateResult } from 'typeorm';
import { v4 } from 'uuid';
import { UserDto } from './dto/user-dto';
import { UserModel } from '../entity/user';
import { TokenService } from '../token/token.service';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService:UsersService) {

  }

    @Get()
  async getAll() {
    const result = await this.usersService.getAll();
    return result;
  }

    @Get(':id')
    async getOne(@Param('id') id: string) {
      const user = await this.usersService.getOne(id);
      return user;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body(new ValidationPipe({ transform: true })) userDto: UserDto):
        Promise<UserDto> {
      const result = await this.usersService.create(userDto);
      return result;
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async update(@Body(new ValidationPipe({ transform: true })) userDto: UserDto, @Param('id') id: string): Promise<UpdateResult | undefined> {
      const result = await this.usersService.update(userDto, id);
      return result;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string): Promise<DeleteResult | undefined> {
      const result = await this.usersService.delete(id);
      return result;
    }
}
