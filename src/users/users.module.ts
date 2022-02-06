import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserModel } from '../entity/user';
import { TokensModel } from '../entity/tokens';
import { TokensService } from '../token/tokens.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, TokensService],
  imports: [TypeOrmModule.forFeature([UserModel, TokensModel], 'nestJs')],
})
export class UsersModule {}
