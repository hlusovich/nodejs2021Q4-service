import {Controller, Get, Param, Paramtype} from '@nestjs/common';


@Controller('boards/:boardId/tasks')
export class TasksController {
    @Get()
    getAll(){
        return "You get All tasks"
    }
    @Get(':id')
    getOne(@Param("id") id: string,@Param("boardId") boardId: string){
        return `task params ${id} and ${boardId}`

    }
}
