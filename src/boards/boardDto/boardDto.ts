import { IColumn } from '../boards.interfaces';

export class BoardDto {
  id!: string;

  title!: string;

  columns!: Array<IColumn>;
}
