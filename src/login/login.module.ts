import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModel} from "../entity/user";

@Module({
  controllers: [LoginController], providers: [LoginService], imports: [TypeOrmModule.forFeature([UserModel], "nestJs"),]
})
export class LoginModule {}
