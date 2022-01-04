import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { multerProductImgOptions } from 'src/lib/multerOption';
import { Role } from 'src/role/role.decorator';
import { UserRole } from 'src/user/entities/user.entity';
import { BindingDto } from './dto/binding.dto';
import { CreatePrintMethodDto } from './dto/create.printMethod.dto';
import { DocuSpecDto } from './dto/docu_spec.dto';
import { LargeCategoryDto } from './dto/largeCategory.dto';
import { MidiumCategoryDto } from './dto/midiumCategory.dto';
import { PageOptionDto } from './dto/pageOption.dto';
import { PaperDto } from './dto/paper.dto';
import { PostProcessDto } from './dto/postProcess.dto';
import { ProductDto } from './dto/product.dto';
import { UpdateBindingDto } from './dto/update.binding.dto';
import { UpdateDocuSpecDto } from './dto/update.docuSpec.dto';
import { UpdatePageOptionDto } from './dto/update.pageOption.dto';
import { UpdatePaperDto } from './dto/update.paper.dto';
import { UpdatePostProcessDto } from './dto/update.postProcess.dto';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('largeCategory')
  getLargeCategory() {
    return this.productService.getLargeCategory();
  }

  @Get('midiumCategory')
  getMidiumCategory() {
    return this.productService.getMidiumCategory();
  }

  @Role([UserRole.Admin])
  @Post('largeCategory')
  createLargeCategory(@Body() largeCategory: LargeCategoryDto) {
    console.log(largeCategory);
    return this.productService.createLargeCategory(largeCategory);
  }

  @Role([UserRole.Admin])
  @Post('midiumCategory')
  cretaeMidiumCategory(@Body() midiumCategory: MidiumCategoryDto) {
    return this.productService.createMidiumCategory(midiumCategory);
  }

  @Role([UserRole.Admin])
  @Delete('largeCategory')
  deleteLargeCatogory(@Body() categoryName) {
    return this.productService.deleteLargeCategory(categoryName);
  }

  @Role([UserRole.Admin])
  @Delete('midiumCategory')
  deleteMidiumCatogory(@Body() categoryName) {
    return this.productService.deleteMidiumCategory(categoryName);
  }

  @Get('product')
  getProduct() {
    return this.productService.getProduct();
  }

  @Get('/getOneProduct/:id')
  getOneProduct(@Param('id') code: string) {
    console.log(code);
    return this.productService.getCodeProduct(code);
  }

  @UseInterceptors(FilesInterceptor('productImg', 3, multerProductImgOptions))
  @Role([UserRole.Admin])
  @Post('createProductImg')
  createProductImg(@Body() id, @UploadedFiles() files: Express.Multer.File[]) {
    console.log(id.id);
    return this.productService.createProductImg(id.id, files);
  }

  @Role([UserRole.Admin])
  @Post('createProduct')
  createProduct(@Body() product: ProductDto) {
    console.log(product);
    return this.productService.createProduct(product);
  }

  @Role([UserRole.Admin])
  @Delete('deleteProduct')
  deleteProduct(@Body() checkItem: Array<Product>) {
    return this.productService.deleteProduct(checkItem);
  }

  @Role([UserRole.Admin])
  @Put()
  updateProduct() {
    return this.productService.updateProduct();
  }

  @Get('unit')
  getUnit() {
    return this.productService.getUnit();
  }

  @Role([UserRole.Admin])
  @Get('binding')
  getBinding() {
    return this.productService.getBinding();
  }

  @Role([UserRole.Admin])
  @Post('binding')
  createBinding(@Body() binding: BindingDto) {
    return this.productService.createBinding(binding);
  }

  @Role([UserRole.Admin])
  @Delete('/binding/:id')
  deleteBinding(@Param('id') bindingId) {
    return this.productService.deleteBinding(bindingId);
  }

  @Role([UserRole.Admin])
  @Put('/binding/:id')
  updateBinding(
    @Param('id') bindingId,
    @Body() updateBindingDto: UpdateBindingDto,
  ) {
    return this.productService.updateBinding(bindingId, updateBindingDto);
  }

  @Role([UserRole.Admin])
  @Get('paper')
  getPaper() {
    return this.productService.getPaper();
  }

  @Role([UserRole.Admin])
  @Post('paper')
  createPaper(@Body() paper: PaperDto) {
    return this.productService.createPaper(paper);
  }

  @Role([UserRole.Admin])
  @Delete('paper/:id')
  deletePaper(@Param('id') paperId) {
    return this.productService.deletePaper(paperId);
  }

  @Role([UserRole.Admin])
  @Put('paper/:id')
  updatePaper(@Param('id') paperId, @Body() updatePaperDto: UpdatePaperDto) {
    return this.productService.updatePaper(paperId, updatePaperDto);
  }

  @Role([UserRole.Admin])
  @Get('docuspec')
  getDocuSpec() {
    return this.productService.getDocuSpec();
  }

  @Role([UserRole.Admin])
  @Post('docuspec')
  createDocuSpec(@Body() docuspec: DocuSpecDto) {
    return this.productService.createDocuSpec(docuspec);
  }

  @Role([UserRole.Admin])
  @Delete('/docuspec/:id')
  deleteDocuSpec(@Param('id') docuspecId) {
    return this.productService.deleteDocuSpec(docuspecId);
  }

  @Role([UserRole.Admin])
  @Put('/docuspec/:id')
  updateDocuSpec(
    @Param('id') docuspecId,
    @Body() updateDocuSpecDto: UpdateDocuSpecDto,
  ) {
    return this.productService.updateDocuSpec(docuspecId, updateDocuSpecDto);
  }

  @Role([UserRole.Admin])
  @Get('postProcess')
  getPostProcess() {
    return this.productService.getPostProcess();
  }

  @Role([UserRole.Admin])
  @Post('postProcess')
  createPostProcess(@Body() postProcessDto: PostProcessDto) {
    return this.productService.createPostProcess(postProcessDto);
  }

  @Role([UserRole.Admin])
  @Delete('/postProcess/:id')
  deletePostProcess(@Param('id') postProcessId) {
    return this.productService.deletePostProcess(postProcessId);
  }

  @Role([UserRole.Admin])
  @Put('/postProcess/:id')
  updatePostProcess(
    @Param('id') postProcessId,
    @Body() updatePostProcessDto: UpdatePostProcessDto,
  ) {
    return this.productService.updatePostProcess(
      postProcessId,
      updatePostProcessDto,
    );
  }

  @Role([UserRole.Admin])
  @Get('pageOption')
  getPageOption() {
    return this.productService.getPageOption();
  }

  @Role([UserRole.Admin])
  @Post('pageOption')
  createPageOption(@Body() pageOption: PageOptionDto) {
    return this.productService.createPageOption(pageOption);
  }

  @Role([UserRole.Admin])
  @Delete('/pageOption/:id')
  deletePageOption(@Param('id') pageOptionId) {
    return this.productService.deletePageOption(pageOptionId);
  }

  @Role([UserRole.Admin])
  @Put('/pageOption/:id')
  updatePageOption(
    @Param('id') pageoptionId,
    @Body() updatePageOptionDto: UpdatePageOptionDto,
  ) {
    return this.productService.updatePageOption(
      pageoptionId,
      updatePageOptionDto,
    );
  }

  @Role([UserRole.Admin])
  @Post('/printMethod')
  createPrintMethod(@Body() createPrintMethod: CreatePrintMethodDto) {
    return this.productService.createPrintMethod(createPrintMethod);
  }

  @Role([UserRole.Admin])
  @Delete('/printMethod/:id')
  deletePrintMethod(@Param('id') printMethodId) {
    return this.productService.deletePrintMethod(printMethodId);
  }

  @Role([UserRole.Admin])
  @Post('/sort')
  createSort(@Body() createSort) {
    return this.productService.createSort(createSort);
  }
}
