import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
// 공지게시판을 위한 api 모듈 
@Module({
  providers: [BoardService],
  controllers: [BoardController]
})
export class BoardModule {}
