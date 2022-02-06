import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModel} from "../entity/user";
import {TokensModel} from "../entity/tokens";
import {TokensService} from "../token/tokens.service";

@Module({
  controllers: [LoginController], providers: [LoginService, TokensService], imports: [TypeOrmModule.forFeature([UserModel, TokensModel], "nestJs"),]
})
export class LoginModule {}
