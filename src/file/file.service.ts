import { Injectable } from '@nestjs/common';
import { TokensModel } from '../entity/tokens';
import {FileModel} from "../entity/file";
import {Express} from "express";
import {Buffer} from "memfs/lib/internal/buffer";
import {CreateFileDto} from "./dto/createFileDto";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";



/**
 * @param payload: UserModel:
 * @returns Promise<TokensModel|undefined>
 */
@Injectable()
export class FileService {
  constructor(@InjectRepository(FileModel, "nestJs")
              private filesRepository: Repository<FileModel>) {
  }
  async getOne(name:string): Promise<CreateFileDto> {
    const file = await this.filesRepository.findOne({originalname:name});
    const data = Buffer.from(file.data, "utf-8");
    return {data, originalname:file.originalname };
  }
  async create(file:Express.Multer.File): Promise<CreateFileDto | undefined> {
    const createdFile = await this.filesRepository.create({originalname:file.originalname,data:file.buffer.toString("base64") });
    await createdFile.save();
    return  {originalname:createdFile.originalname, data:Buffer.from(createdFile.data, "utf-8")};
  }
}
