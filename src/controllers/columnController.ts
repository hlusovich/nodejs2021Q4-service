import { ColumnsModel } from '../entity/columns';
import { Column } from '../resources/boards/Column';

export class ColumnModelController {
  static async getColumn(id: string): Promise<ColumnsModel | undefined> {
    return await ColumnsModel.findOne(id);
  }
  static async createColumn(data: Column): Promise<ColumnsModel | undefined> {
    const column = await ColumnsModel.create(data);
    await column.save();
    return column;
  }
}
