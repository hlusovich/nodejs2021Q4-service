import {
  IsInt, IsNotEmpty, IsString, ValidateIf,
} from 'class-validator';

export class UserDto {
  @IsString()
    name: string;

  @IsString()
    login: string;

  @IsString()
    password: string;

  @ValidateIf((o) => o.id)
  @IsString()
    id?: string;
}
