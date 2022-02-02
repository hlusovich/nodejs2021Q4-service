import {
  Body,
  Injectable, Param, ValidationPipe,
} from '@nestjs/common';
import { hash } from 'bcrypt';
import { v4 } from 'uuid';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UserModel } from '../entity/user';
import { UserDto } from './dto/user-dto';
import { TokenService } from '../token/token.service';

@Injectable()
export class UsersService {
  async getAll() {
    const result = await UserModel.query('SELECT * FROM users');
    return result;
  }

  async getOne(id: string) {
    const user = await UserModel.findOne(id);
    return user;
  }

  async create(userDto: UserDto):
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

  async update(userDto: UserDto, id: string): Promise<UpdateResult | undefined> {
    const response = await UserModel.update(id, { ...userDto });
    return response;
  }

  async delete(id: string): Promise<DeleteResult | undefined> {
    const response = await UserModel.delete(id);
    return response;
  }
}
