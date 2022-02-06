import { IsString, ValidateIf, IsArray } from 'class-validator';
import { IColumn } from '../boards.interfaces';

export class BoardDto {
    @ValidateIf((o) => o.id)
    @IsString()
      id: string;

    @IsString()
      title: string;

    @ValidateIf((o) => o.columns)
    @IsArray()
      columns: Array<IColumn>;
}
