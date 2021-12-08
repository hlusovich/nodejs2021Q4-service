import { v4 } from 'uuid';

interface IColumn {
  id: string;
  title: string;
  order: number
}

export interface IBoardToResponse {
  title: string;
  id: string;
  columns: IColumn[],
}



export class Board {
  id:string;

  title:string;

  columns:Set<IColumn>;

  constructor({ title, columns, id }: IBoardToResponse) {
    this.id = id || v4();
    this.title = title;
    this.columns = new Set(columns);
  }

  /**
   * return Board object without methods
   * @param there is no param
   * @returns IBoardToResponse
   */
  toResponse():IBoardToResponse {
    return {
      id: this.id,
      title: this.title,
      columns: [...this.columns]
    };
  }

}
