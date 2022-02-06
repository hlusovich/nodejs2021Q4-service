import { Injectable } from '@nestjs/common';
import { TokensModel } from '../entity/tokens';
import { LoginDto } from './loginDto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {UserModel} from "../entity/user";
import {Error403} from "../../Errors/403error";
import {compare} from "bcrypt";
import {TokensService} from "../token/tokens.service";

/**
 * @param payload: UserModel:
 * @returns Promise<TokensModel|undefined>
 */
@Injectable()
export class LoginService {
  constructor(@InjectRepository(UserModel, "nestJs")
              private userssRepository: Repository<UserModel>, private tokensService:TokensService){

  }
  async logIn(payload: LoginDto): Promise<TokensModel | undefined> {
    const user = await this.userssRepository.findOne({login:payload.login});
    if (!user) {
      throw new Error403('such user doesn\'t exist');
    }
    const isPassEquals = await compare(payload.password, user.password);
    if (!isPassEquals) {
      throw new Error403('such user doesn\'t exist');
    }
    const token = await this.tokensService.getToken(user.id);
    if (token) {
      return token;
    }
    return undefined;
  }
}
