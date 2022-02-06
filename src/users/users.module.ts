import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModel} from "../entity/user";
import {TokensModule} from "../token/tokens.module";
import {TokensModel} from "../entity/tokens";
import {TokensService} from "../token/tokens.service";


@Module({ controllers: [UsersController], providers: [UsersService,TokensService],  imports:[TypeOrmModule.forFeature([UserModel, TokensModel], "nestJs")] })
export class UsersModule {}
