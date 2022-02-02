import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post, UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { TokensModel } from '../entity/tokens';
import { LoginDto } from './loginDto';
import { LoggerGuard } from '../guards/logger-guard.guard';

@Controller('login')
export class LoginController {
  constructor(private loginService:LoginService) {

  }

     @Post()
     @UseGuards(LoggerGuard)
    @HttpCode(HttpStatus.CREATED)
  async create(@Body(new ValidationPipe({ transform: true })) loginDto: LoginDto, @Param('boardId') boardId: string): Promise<TokensModel | undefined> {
    const result = await this.loginService.logIn(loginDto);
    return result;
  }
}
