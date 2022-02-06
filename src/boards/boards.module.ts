import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsController } from './boards.controller';
import { BoardService } from './board.service';
import { BoardModel } from '../entity/board';
import { TaskModel } from '../entity/task';

@Module({ controllers: [BoardsController], providers: [BoardService], imports: [TypeOrmModule.forFeature([BoardModel], 'nestJs'), TypeOrmModule.forFeature([TaskModel], 'nestJs')] })
export class BoardsModule {}
