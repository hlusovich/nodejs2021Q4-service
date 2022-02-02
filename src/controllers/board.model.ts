import { v4 } from 'uuid';

export interface IColumn {
  order:number,
  title:string,
  id:string
}
export class Board {
  id: string;

  title: string;

  columns: Array<IColumn>;

  constructor({ title, columns, id }: Omit<Board, 'toResponse'>) {
    this.id = id || v4();
    this.title = title;
    this.columns = columns;
  }

  /**
   * create Board object without methods
   * @param there is no param
   * @returns Board without methods
   */
  toResponse(): Omit<Board, 'toResponse'> {
    return {
      id: this.id,
      title: this.title,
      columns: [...this.columns].map((item) => {
        const id = v4();
        return { ...item, id };
      }),
    };
  }
}
