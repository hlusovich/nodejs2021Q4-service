import { BaseEntity, } from '../../node_modules/typeorm/repository/BaseEntity.js';
import {Column} from '../../node_modules/typeorm/decorator/columns/Column.js';
import {PrimaryColumn} from '../../node_modules/typeorm/decorator/columns/PrimaryColumn.js';
import {Entity} from '../../node_modules/typeorm/decorator/entity/Entity.js';

// @ManyToOne(type=>UserModel,{onDelete:"SET NULL"})
@Entity('tasks')
export class TaskModel extends BaseEntity{
  constructor(id:number, title:string,order:number,userId:string, boardId:string,columnId:string, description:string){
    super();
    this.id = id;
    this.title = title;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
    this.description = description;
    this.order = order;
  }
  @PrimaryColumn()
  id:number;
  @Column()
  title: string;
  @Column({ nullable: true})
  userId: string;
  @Column()
  boardId: string;
  @Column()
  columnId: string;
  @Column()
  order: number;
  @Column()
  description: string;
}
