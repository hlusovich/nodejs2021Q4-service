import {
  PipeTransform, Injectable, ArgumentMetadata, BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { logger, MyLogger } from './MyLogger';
import { BoardDto } from './boards/boardDto/boardDto';
import { TaskDto } from './tasks/dto/task';
import { UserDto } from './users/dto/user-dto';
import { LoginDto } from './login/dto/loginDto';

@Injectable()
export class ValidationPipe implements PipeTransform {
  logger: MyLogger;

  constructor() {
    this.logger = logger;
  }

  async transform(value: BoardDto | TaskDto | UserDto
      | LoginDto, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      this.logger.error(errors);
      throw new BadRequestException('Validation failed');
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
