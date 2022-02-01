import {Controller, Get, Param} from '@nestjs/common';

@Controller('boards')
export class BoardsController {
    @Get()
    getAll(){
        return "You get All boards"
    }
    @Get(':id')
    getOne(@Param('id') id:string){
        return `board params ${id}`

    }
}
