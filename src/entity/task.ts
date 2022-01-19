import {
  BaseEntity, Column, PrimaryColumn, Entity,
} from 'typeorm';

// @ManyToOne(type=>UserModel,{onDelete:"SET NULL"})
@Entity('tasks')
export class TaskModel extends BaseEntity {
  constructor(
    id:string,
    title:string,
    order:number,
    userId:string| null,
    boardId:string,
    columnId:string,
    description:string,
  ) {
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
    id:string;

  @Column()
    title: string;

  @Column({ type: 'text', nullable: true })
    userId?: string|null;

  @Column()
    boardId: string;

  @Column({ nullable: true })
    columnId: string;

  @Column()
    order: number;

  @Column()
    description: string;
}
