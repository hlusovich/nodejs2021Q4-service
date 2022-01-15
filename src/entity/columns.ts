import { BaseEntity, } from '../../node_modules/typeorm/repository/BaseEntity.js';
import {Column} from '../../node_modules/typeorm/decorator/columns/Column.js';
import {PrimaryColumn} from '../../node_modules/typeorm/decorator/columns/PrimaryColumn.js';
import {Entity} from '../../node_modules/typeorm/decorator/entity/Entity.js';


@Entity('columns')
export class ColumnsModel extends BaseEntity{
  constructor(id:string, title:string,order:number){
    super();
    this.id = id;
    this.title = title;
    this.order = order;
  }
  @PrimaryColumn()
  id:string;
  @Column()
  title: string;
  @Column()
  order: number;

}
