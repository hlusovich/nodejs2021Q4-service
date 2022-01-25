import { ColumnsModel } from '../entity/columns';

export class ColumnModelController {
  static async getColumn(id: string): Promise<ColumnsModel | undefined> {
    const result = await ColumnsModel.findOne(id);
    return result;
  }

  static async createColumn(data: Column): Promise<ColumnsModel | undefined> {
    const column = await ColumnsModel.create(data);
    await column.save();
    return column;
  }
}
