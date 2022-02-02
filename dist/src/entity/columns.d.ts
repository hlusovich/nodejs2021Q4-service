import { BaseEntity } from 'typeorm';

export declare class ColumnsModel extends BaseEntity {
  constructor(id: string, title: string, order: number);

  id: string;

  title: string;

  order: number;
}
