import {
  BaseEntity, Column, PrimaryColumn, Entity, OneToMany, ManyToOne,
} from 'typeorm';
import { BoardModel } from './board';

@Entity('columns')
export class ColumnsModel extends BaseEntity {
  constructor(id:string, title:string, order:number) {
    super();
    this.id = id;
    this.title = title;
    this.order = order;
  }

  @ManyToOne(() => BoardModel, (boards) => boards.columns)
  @PrimaryColumn({ unique: true })
    id:string;

  @Column()
    title: string;

  @Column()
    order: number;
}
