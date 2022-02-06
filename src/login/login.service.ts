import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compare } from 'bcrypt';
import { TokensModel } from '../entity/tokens';
import { LoginDto } from './dto/loginDto';
import { UserModel } from '../entity/user';
import { Error403 } from '../../Errors/403error';
import { TokensService } from '../token/tokens.service';

/**
 * @param payload: UserModel:
 * @returns Promise<TokensModel|undefined>
 */
@Injectable()
export class LoginService {
  constructor(
@InjectRepository(UserModel, 'nestJs')
              private userssRepository: Repository<UserModel>,
              private tokensService:TokensService,
  ) {

  }

  async logIn(payload: LoginDto): Promise<TokensModel | undefined> {
    const user = await this.userssRepository.findOne({ login: payload.login });
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
