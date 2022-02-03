import { Controller, Get, Param, Post, UploadedFile, UseInterceptors, ValidationPipe} from '@nestjs/common';
import {FileService} from "./file.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {Express} from "express";
import {Buffer} from "buffer";
import {CreateFileDto} from "./dto/createFileDto";

@Controller('file')
export class FileController {
    constructor(private fileService:FileService){
    }
    @Get(":name")
    async getOne(@Param("name")name:string): Promise<CreateFileDto> {
        return this.fileService.getOne(name);
    }
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async create(@UploadedFile() file: Express.Multer.File): Promise<CreateFileDto> {
        return this.fileService.create(file);


    }
}
