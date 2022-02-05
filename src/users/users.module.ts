import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModel} from "../entity/user";


@Module({ controllers: [UsersController], providers: [UsersService],  imports:[TypeOrmModule.forFeature([UserModel], "nestJs")] })
export class UsersModule {}
