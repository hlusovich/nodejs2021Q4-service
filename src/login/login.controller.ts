import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    UseGuards,
    ValidationPipe,
} from '@nestjs/common';
import {JwtAuthGuard} from "../guard/jwt-guard.guard";
import {logIn} from "./login.service";
import {TokensModel} from "../entity/tokens";
import {LoginDto} from './loginDto';
@Controller('login')
export class LoginController {
     @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body(new ValidationPipe({transform: true})) loginDto: LoginDto, @Param('boardId') boardId: string): Promise<TokensModel | undefined> {
        const result = await logIn(loginDto);
        return result;
    }

}
