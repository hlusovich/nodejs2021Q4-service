import { BaseEntity, } from '../../node_modules/typeorm/repository/BaseEntity.js';
import {Column} from '../../node_modules/typeorm/decorator/columns/Column.js';
import {PrimaryColumn} from '../../node_modules/typeorm/decorator/columns/PrimaryColumn.js';
import {Entity} from '../../node_modules/typeorm/decorator/entity/Entity.js';


@Entity('boards')
export class BoardModel extends BaseEntity{
  constructor(id:number, title:string,columns:string){
    super();
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
  @PrimaryColumn()
  id:number;
  @Column()
  title: string;
  @Column()
  columns: string;

}
