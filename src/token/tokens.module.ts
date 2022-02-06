import { Module } from '@nestjs/common';

import {TypeOrmModule} from "@nestjs/typeorm";
import {TokensModel} from "../entity/tokens";
import {TokensService} from "./tokens.service";


@Module({
  providers: [TokensService],
  imports: [TypeOrmModule.forFeature([TokensModel], "nestJs")]
})
export class TokensModule {}
