import { IsString, IsInt, ValidateIf } from 'class-validator';

export class TaskDto {
    @IsString()
      title: string;

    @IsInt()
      order: number;

  @ValidateIf((o) => o.userId)
  @IsString()
    userId: string;

  @ValidateIf((o) => o.boardId)
  @IsString()
    boardId: string;

  @ValidateIf((o) => o.columnId)
  @IsString()
    columnId: string;

    @IsString()
      description: string;
}
