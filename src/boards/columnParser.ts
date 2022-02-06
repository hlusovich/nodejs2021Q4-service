import { IBoard, IBoardResponse } from './boards.interfaces';

/**
 * @param IBoardResponse
 * parse IBoardResponse.columns to js objects;
 * @returns IBoard
 */
export function parseColumns(board:IBoardResponse): IBoard {
  const columns = board.columns.map((item:string) => JSON.parse(item));
  const parsedBoard:IBoard = { ...board, columns };
  return parsedBoard;
}
