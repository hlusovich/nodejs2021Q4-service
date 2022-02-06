import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post, UseGuards,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { TokensModel } from '../entity/tokens';
import { LoginDto } from './dto/loginDto';
import { LoggerGuard } from '../guards/logger-guard.guard';
import { ValidationPipe } from '../validatorPipeline';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {

  }

    @Post()
    @UseGuards(LoggerGuard)
    @HttpCode(HttpStatus.CREATED)
  async create(@Body(new ValidationPipe()) loginDto: LoginDto): Promise<TokensModel | undefined> {
    const result = await this.loginService.logIn(loginDto);
    return result;
  }
}
