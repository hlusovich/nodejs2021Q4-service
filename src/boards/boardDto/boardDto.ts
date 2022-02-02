import { IColumn } from '../../controllers/board.model';

export class BoardDto {
  id!: string;

  title!: string;

  columns!: Array<IColumn>;
}
