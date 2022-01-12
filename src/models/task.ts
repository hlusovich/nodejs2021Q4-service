import { BaseEntity, } from '../../node_modules/typeorm/repository/BaseEntity.js';
import {Column} from '../../node_modules/typeorm/decorator/columns/Column.js';
import {PrimaryColumn} from '../../node_modules/typeorm/decorator/columns/PrimaryColumn.js';
import {Entity} from '../../node_modules/typeorm/decorator/entity/Entity.js';
import {ManyToOne} from '../../node_modules/typeorm/decorator/relations/ManyToOne.js';
import {UserModel} from "./user.js";
// @Column()
// order: number;
@Entity('tasks666')
export class TaskModel extends BaseEntity{
  constructor(id:number, title:string,order:number,userId:string, boardId:string,columnId:string, description:string){
    super();
    this.id = id;
    this.title = title;
    this.userid = userId;
    this.boardid = boardId;
    this.columnid = columnId;
    this.description = description;
    // this.order = order;
  }
  @PrimaryColumn()
  id:number;
  @Column()
  title: string;
  @ManyToOne(type=>UserModel,{onDelete:"SET NULL"})
  @Column()
  userid: string;
  @Column()
  boardid: string;
  @Column()
  columnid: string;
  @Column()
  description: string;
}
