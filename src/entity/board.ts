import {
  Column, BaseEntity, PrimaryColumn, Entity, ManyToOne, JoinTable, OneToMany,
} from 'typeorm';
import { ColumnsModel } from './columns';

@Entity('boards')
export class BoardModel extends BaseEntity {
  constructor(id:string, title:string, columns: ColumnsModel[]) {
    super();
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  @PrimaryColumn({ unique: true, type: 'text' })
    id:string;

  @Column()
    title: string;

  @Column({ type: 'text', array: true, default: [] })
    columns: ColumnsModel[];
}
