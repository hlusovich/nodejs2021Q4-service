import { TokensModel } from '../entity/tokens';
import { UserDto } from '../users/dto/user-dto';

export declare class TokenService {
  static generateToken(payload: Omit<UserDto, 'password' | 'name'>): string;

  static saveToken(userId: string | undefined, newToken: string): Promise<TokensModel>;

  static getToken(id: string): Promise<TokensModel>;
}
