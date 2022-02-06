import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { MyLogger } from './MyLogger';
import { BoardDto } from './boards/boardDto/boardDto';
import { TaskDto } from './tasks/dto/task';
import { UserDto } from './users/dto/user-dto';
import { LoginDto } from './login/dto/loginDto';
export declare class ValidationPipe implements PipeTransform {
    logger: MyLogger;
    constructor();
    transform(value: BoardDto | TaskDto | UserDto | LoginDto, { metatype }: ArgumentMetadata): Promise<BoardDto | TaskDto | UserDto | LoginDto>;
    private toValidate;
}
