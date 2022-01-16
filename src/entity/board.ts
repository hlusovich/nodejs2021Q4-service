import {
  Column, BaseEntity, PrimaryColumn, Entity,
} from 'typeorm';

@Entity('boards')
export class BoardModel extends BaseEntity {
  constructor(id:string, title:string, columns: string[]) {
    super();
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  @PrimaryColumn()
    id:string;

  @Column()
    title: string;

  @Column({ type: 'int', array: true, default: [] })
    columns: string[];
}
