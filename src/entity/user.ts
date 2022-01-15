import { BaseEntity, } from '../../node_modules/typeorm/repository/BaseEntity.js';
import {Column} from '../../node_modules/typeorm/decorator/columns/Column.js';
import {PrimaryColumn} from '../../node_modules/typeorm/decorator/columns/PrimaryColumn.js';
import {Entity} from '../../node_modules/typeorm/decorator/entity/Entity.js';


@Entity('users')
export class UserModel extends BaseEntity{
  constructor(id:string, name:string,login:string,password:string){
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
