import { sign } from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../../config';
import { TokensModel } from '../entity/tokens';
import { UserDto } from '../users/dto/user-dto';

export class TokenService {
  static generateToken(payload: Omit<UserDto, 'password' | 'name'>): string {
    const accessToken = sign({ ...payload, userId: payload.id }, JWT_SECRET_KEY);
    return accessToken;
  }

  static async saveToken(userId: string| undefined, newToken: string) {
    const tokenData = await TokensModel.findOne({ userId });
    if (tokenData) {
      tokenData.token = `Bearer ${newToken}`;
      const result = await tokenData.save();
      return result;
    }
    const createdTokenData = await TokensModel.create({ userId, token: newToken });
    const result = await createdTokenData.save();
    return result;
  }

  static async getToken(id: string) {
    const token = await TokensModel.findOne({ userId: id });
    return token;
  }
}
