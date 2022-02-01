import {Body, Controller, Get, HttpCode, HttpStatus, Param, Post, ValidationPipe} from '@nestjs/common';
import {UserDto} from "./dto/user-dto";
import {Params} from "express-serve-static-core";

@Controller('users')
export class UsersController {
    @Get()
    getAll(){
        return "You get All users"
    }
    @Get(':id')
    getOne(@Param("id") id:string){
        return `user params ${id}`

    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body(new ValidationPipe({transform: true})) userDto:UserDto):Promise<string>{
        return "sfsf" + userDto.name;
    }
}
