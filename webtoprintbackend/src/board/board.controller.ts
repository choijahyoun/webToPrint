import { Controller, Get } from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
    constructor( private readonly boadService : BoardService ){}
    
    @Get()
    getList()
    {
        return this.boadService.getList();
    }

}
