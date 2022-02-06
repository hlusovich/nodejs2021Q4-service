import { Buffer } from 'buffer';

export class CreateFileDto {
  originalname: string;

  data: Buffer;
}
