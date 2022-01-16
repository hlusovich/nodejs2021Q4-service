import {
  BaseEntity, Column, PrimaryColumn, Entity,
} from 'typeorm';

@Entity('users')
export class UserModel extends BaseEntity {
  constructor(id:string, name:string, login:string, password:string) {
    super();
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  @PrimaryColumn()
    id:string;

  @Column()
    name: string;

  @Column()
    login: string;

  @Column()
    password: string;
}
