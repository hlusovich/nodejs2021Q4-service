import { sign } from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../../../config';
import { TokensModel } from '../../entity/tokens';
import { User } from '../users/user.model';

export class TokenService {
  static generateToken(payload: Omit<User, 'password' | 'name'>): string {
    const accessToken = sign({ ...payload, userId: payload.id }, JWT_SECRET_KEY, { expiresIn: '30m' });
    return accessToken;
  }

  static async saveToken(userId: string, newToken: string) {
    const tokenData = await TokensModel.findOne({ userId });
    if (tokenData) {
      tokenData.token = 'Bearer ' + newToken;
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
