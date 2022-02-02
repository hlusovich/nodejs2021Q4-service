import {
  Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, ValidationPipe,
} from '@nestjs/common';
import { hash } from 'bcrypt';
import { DeleteResult, UpdateResult } from 'typeorm';
import { v4 } from 'uuid';
import { UserDto } from './dto/user-dto';
import { UserModel } from '../entity/user';
import { TokenService } from '../token/token.service';

@Controller('users')
export class UsersController {
    @Get()
  async getAll() {
    const result = await UserModel.query('SELECT * FROM users');
    return result;
  }

    @Get(':id')
    async getOne(@Param('id') id: string) {
      const user = await UserModel.findOne(id);
      return user;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body(new ValidationPipe({ transform: true })) userDto: UserDto):
        Promise<UserDto> {
      const hashPassword = await hash(userDto.password, 3);
      const user = await UserModel.create({ ...userDto, password: hashPassword, id: v4() });
      await user.save();
      if (userDto.login) {
        const token = TokenService.generateToken({ login: user.login, id: user.id });
        await TokenService.saveToken(user.id, token);
      }
      delete user.password;
      return user;
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async update(@Body(new ValidationPipe({ transform: true })) userDto: UserDto, @Param('id') id: string): Promise<UpdateResult | undefined> {
      const response = await UserModel.update(id, { ...userDto });
      return response;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string): Promise<DeleteResult | undefined> {
      const response = await UserModel.delete(id);
      return response;
    }
}
