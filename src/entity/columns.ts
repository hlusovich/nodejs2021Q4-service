import {
  BaseEntity, Column, PrimaryColumn, Entity,
} from 'typeorm';

@Entity('columns')
export class ColumnsModel extends BaseEntity {
  constructor(id:string, title:string, order:number) {
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
