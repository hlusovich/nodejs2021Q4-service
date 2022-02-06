import { sign } from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JWT_SECRET_KEY } from '../../config';
import { TokensModel } from '../entity/tokens';
import { UserDto } from '../users/dto/user-dto';

@Injectable()
export class TokensService {
  constructor(@InjectRepository(TokensModel, 'nestJs')
                private tokensRepository: Repository<TokensModel>) {

  }

  generateToken(payload: Omit<UserDto, 'password' | 'name'>): string {
    const accessToken = sign({ ...payload, userId: payload.id }, JWT_SECRET_KEY);
    return accessToken;
  }

  async saveToken(userId: string | undefined, newToken: string) {
    const tokenData = await this.tokensRepository.findOne({ userId });
    if (tokenData) {
      tokenData.token = newToken;
      const result = await tokenData.save();
      return result;
    }
    const createdTokenData = await this.tokensRepository.create({ userId, token: newToken });
    const result = await createdTokenData.save();
    return result;
  }

  async getToken(id: string) {
    const token = await this.tokensRepository.findOne({ userId: id });
    return token;
  }
}
