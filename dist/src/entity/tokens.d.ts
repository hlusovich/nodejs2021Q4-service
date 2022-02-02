import { BaseEntity } from 'typeorm';

export declare class TokensModel extends BaseEntity {
  constructor(userId: string, token: string);

  userId: string;

  token: string;
}
