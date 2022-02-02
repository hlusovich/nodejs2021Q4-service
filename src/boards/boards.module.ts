import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import {BoardService} from "./board.service";

@Module({ controllers: [BoardsController], providers:[BoardService] })
export class BoardsModule {}
