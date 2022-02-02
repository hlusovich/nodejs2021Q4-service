import {
  BaseEntity, Column, PrimaryColumn, Entity,
} from 'typeorm';

@Entity('tokens')
export class TokensModel extends BaseEntity {
  constructor(userId:string, token:string) {
    super();
    this.userId = userId;
    this.token = token;
  }

  @PrimaryColumn()
    userId:string;

  @Column()
    token: string;
}
