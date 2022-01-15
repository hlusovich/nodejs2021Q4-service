import { BaseEntity, } from '../../node_modules/typeorm/repository/BaseEntity.js';
import {PrimaryColumn} from '../../node_modules/typeorm/decorator/columns/PrimaryColumn.js';
import {Entity} from '../../node_modules/typeorm/decorator/entity/Entity.js';
import { Column, JoinTable, ManyToMany } from 'typeorm';
import { ColumnsModel } from './columns';


@Entity('boards')
export class BoardModel extends BaseEntity{
  constructor(id:string, title:string,columns: number[]){
    super();
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
  @PrimaryColumn()
  id:string;
  @Column()
  title: string;
  @Column({     type: "int",     array: true,     default: [] })
  columns: number[];

}
