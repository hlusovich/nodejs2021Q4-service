import { Injectable } from '@nestjs/common';
import { TokensModel } from '../entity/tokens';
import {FileModel} from "../entity/file";
import {Express} from "express";
import {Buffer} from "memfs/lib/internal/buffer";
import {CreateFileDto} from "./dto/createFileDto";


/**
 * @param payload: UserModel:
 * @returns Promise<TokensModel|undefined>
 */
@Injectable()
export class FileService {
  async getOne(name:string): Promise<CreateFileDto> {
    const file = await FileModel.findOne({originalname:name});
    const data = Buffer.from(file.data, "utf-8");
    return {data, originalname:file.originalname };
  }
  async create(file:Express.Multer.File): Promise<CreateFileDto | undefined> {
    console.log(file.buffer.toString('base64'));
    const createdFile = await FileModel.create({originalname:file.originalname,data:file.buffer.toString("base64") });
    await createdFile.save();
    return  {originalname:createdFile.originalname, data:Buffer.from(createdFile.data, "utf-8")};
  }
}
