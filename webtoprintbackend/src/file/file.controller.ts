import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { multerOptions } from 'src/lib/multerOption';
import { FileService } from './file.service';

@ApiTags('file')
@Controller('file')
export class FileController {
  constructor(private readonly fileSevice: FileService) {}

  @Get(':id')
  fileGet(@Param('id') orderId: number) {
    return this.fileSevice.fileGet(orderId);
  }

  @UseInterceptors(FilesInterceptor('filepdf', 3, multerOptions))
  @UseGuards(JwtAuthGuard)
  @Post('upload/:id')
  fileUpload(
    @UploadedFiles() files: Express.Multer.File[],
    @Param('id') orderId: number,
  ) {
    return this.fileSevice.fileOrderUpload(files, orderId);
  }

  @Post('update/:id')
  fileUpdate(
    @UploadedFile() files: Express.Multer.File,
    @Param('id') fileId: number,
  ) {
    return this.fileSevice.fileUpdate(files, fileId);
  }

  @Delete('delete/:id')
  fileDelete(@Param('id') fileId) {
    return this.fileSevice.fileDelete(fileId);
  }
}
