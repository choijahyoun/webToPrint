import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
import { Binding } from './entities/binding.entity';
import { Docu_spec } from './entities/docu_spec.entity';
import { LargeCategory } from './entities/largeCategory.entity';
import { MediumCategory } from './entities/mediumCategory.entity';
import { PageOption } from './entities/pageOption.entity';
import { Paper } from './entities/paper.entity';
import { PrintMethod } from './entities/printMethod.entity';
import { Process } from './entities/process.entity';
import { Product } from './entities/product.entity';
import { ProductSort } from './entities/sort.entity';
import { Unit } from './entities/unit.entity';

@Injectable()
export class ProductService {
  constructor(
    // 상품 카테고리 관련 레포지토리
    @InjectRepository(LargeCategory)
    private largeCategoryRepository: Repository<LargeCategory>,
    @InjectRepository(MediumCategory)
    private mediumCategoryRepository: Repository<MediumCategory>,
    // 상품 관련 레포지토리
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Docu_spec)
    private docuspecRepository: Repository<Docu_spec>,
    @InjectRepository(PageOption)
    private pageOptionRepository: Repository<PageOption>,
    @InjectRepository(Process)
    private processRepository: Repository<Process>,
    @InjectRepository(Unit)
    private UnitRepository: Repository<Unit>,
    @InjectRepository(Binding)
    private bindingRepository: Repository<Binding>,
    @InjectRepository(Paper)
    private paperRepository: Repository<Paper>,
    @InjectRepository(PrintMethod)
    private printMethodRepository: Repository<PrintMethod>,
    @InjectRepository(ProductSort)
    private productSortRepository: Repository<ProductSort>,
  ) {}

  async getLargeCategory() {
    try {
      const largeCategoryList = await this.largeCategoryRepository.find({
        relations: ['mediumCategory'],
      });
      console.log(largeCategoryList);
      return largeCategoryList;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  getMidiumCategory() {
    try {
      const midiumCategoryList = this.mediumCategoryRepository.find({
        relations: ['largeCategory', 'product'],
      });
      return midiumCategoryList;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createLargeCategory(largeCategory: LargeCategoryDto) {
    try {
      const check = await this.largeCategoryRepository.findOne({
        name: largeCategory.name,
      });
      console.log(check);
      if (!check) {
        const category = new LargeCategory();
        category.name = largeCategory.name;
        category.code = largeCategory.code;
        const createCategory = this.largeCategoryRepository.save(category);
        if (!createCategory) {
          throw new HttpException(
            {
              status: HttpStatus.BAD_REQUEST,
              error: '카테고리 생성 불가',
            },
            HttpStatus.BAD_REQUEST,
          );
        }
        return createCategory;
      }
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'largeCategory Exist',
        },
        HttpStatus.BAD_REQUEST,
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createMidiumCategory(midiumCategory: MidiumCategoryDto) {
    try {
      const largeCategory = await this.largeCategoryRepository.findOne({
        name: midiumCategory.largeCategory,
      });
      if (!largeCategory) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '라지카테고리 없음',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      const checkMidiumCategory = await this.mediumCategoryRepository.findOne({
        name: midiumCategory.name,
      });
      if (!checkMidiumCategory) {
        const category = new MediumCategory();
        category.name = midiumCategory.name;
        category.code = midiumCategory.code;
        category.largeCategory = largeCategory;
        const createCategory = this.mediumCategoryRepository.save(category);
        return createCategory;
      }
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'midiumCategory Exist',
        },
        HttpStatus.BAD_REQUEST,
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteLargeCategory(categoryName) {
    try {
      const largeCategory = await this.largeCategoryRepository.findOne({
        name: categoryName.name,
      });
      console.log(largeCategory);
      if (!largeCategory) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '카테고리 없음',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      const deleteOneCategory = await this.largeCategoryRepository.delete({
        name: largeCategory.name,
      });
      console.log(deleteOneCategory);
      return deleteOneCategory;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteMidiumCategory(categoryName) {
    try {
      const midiumCategory = await this.mediumCategoryRepository.findOne({
        name: categoryName.name,
      });
      if (!midiumCategory) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '카테고리 없음',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      const deleteOneCategory = await this.mediumCategoryRepository.delete({
        name: midiumCategory.name,
      });
      console.log(deleteOneCategory);
      return deleteOneCategory;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  getProduct() {
    try {
      const product = this.productRepository.find({
        relations: [
          'mediumCategory',
          'docuspec',
          'paper',
          'binding',
          'process',
          'printMethod',
          'productSort',
        ],
      });
      if (!product) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '상품없음',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      console.log(product);
      return product;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getCodeProduct(code: string) {
    try {
      const product = await this.productRepository.findOne({
        where: { code: code },
        relations: [
          'mediumCategory',
          'docuspec',
          'paper',
          'binding',
          'process',
          'printMethod',
          'productSort',
        ],
      });
      if (!product) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '상품없음',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      console.log(product);
      return new HttpException(
        {
          status: HttpStatus.OK,
          product: product,
        },
        HttpStatus.OK,
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createProduct(productDto: ProductDto) {
    try {
      console.log(productDto);
      const midiumCategory = await this.mediumCategoryRepository.findOne({
        name: productDto.midiumCategory,
      });
      if (!midiumCategory) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '중분류 없음',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      const product = new Product();
      product.name = productDto.name;
      product.code = productDto.code;
      product.mediumCategory = midiumCategory;
      product.offset = productDto.offset;
      if (productDto.binding.length > 0) {
        product.binding = [];
        for (let i = 0; i < productDto.binding.length; i++) {
          const binding = await this.bindingRepository.findOne({
            id: +productDto.binding[i].id,
          });
          product.binding.push(binding);
        }
      }
      if (productDto.docuSpec.length > 0) {
        product.docuspec = [];
        for (let i = 0; i < productDto.docuSpec.length; i++) {
          const docuSpec = await this.docuspecRepository.findOne({
            id: +productDto.docuSpec[i].id,
          });
          product.docuspec.push(docuSpec);
        }
      }
      if (productDto.pageOption.length > 0) {
        product.pageOption = [];
        for (let i = 0; i < productDto.pageOption.length; i++) {
          const pageOption = await this.pageOptionRepository.findOne({
            id: +productDto.pageOption[i].id,
          });
          product.pageOption.push(pageOption);
        }
      }
      if (productDto.postProcess.length > 0) {
        product.process = [];
        for (let i = 0; i < productDto.postProcess.length; i++) {
          const postProcess = await this.processRepository.findOne({
            id: +productDto.postProcess[i].id,
          });
          product.process.push(postProcess);
        }
      }
      if (productDto.paper.length > 0) {
        product.paper = [];
        for (let i = 0; i < productDto.paper.length; i++) {
          const paper = await this.paperRepository.findOne({
            id: +productDto.paper[i].id,
          });
          product.paper.push(paper);
        }
      }
      const saveProduct = await this.productRepository.save(product);
      return new HttpException(
        {
          status: HttpStatus.CREATED,
          message: '상품등록완료',
          product: saveProduct,
        },
        HttpStatus.CREATED,
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createProductImg(id, files: Express.Multer.File[]) {
    try {
      console.log(id);
      const product = await this.productRepository.findOne(id);
      if (!product) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            message: '상품없음',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      console.log(product);
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          this.productRepository.update(
            {
              id: product.id,
            },
            {
              imgName: files[i].originalname,
              imgLocation: `${process.env.LOCALPATH}/${files[i].destination}/${files[i].originalname}`,
            },
          );
          console.log(files[i]);
        }
      }
      return new HttpException(
        {
          status: HttpStatus.CREATED,
          message: '파일등록완료',
        },
        HttpStatus.CREATED,
      );
    } catch (error) {
      throw error;
    }
  }

  updateProduct() {
    return 'updateProduct';
  }

  deleteProduct(deleteItem) {
    try {
      for (let i = 0; i < deleteItem.checkItem.length; i++) {
        const checkdDeleteProduct = this.productRepository.delete({
          id: deleteItem.checkItem[i].id,
        });
        if (!checkdDeleteProduct) {
          throw new HttpException(
            {
              status: HttpStatus.BAD_REQUEST,
              message: '상품삭제실패',
            },
            HttpStatus.BAD_REQUEST,
          );
        }
      }
      return new HttpException(
        {
          status: HttpStatus.CREATED,
          message: '상품삭제완료',
        },
        HttpStatus.CREATED,
      );
    } catch (error) {
      console.log(error);
    }
    return 'deleteProduct';
  }

  updateLargeCategory() {
    return 'updateLargeCategory';
  }

  updateMidiumCategory() {
    return 'updateMidiumCategory';
  }

  async getUnit() {
    try {
      const getUnit = await this.UnitRepository.find();
      if (!getUnit) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '단위가져오기실패 ',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return getUnit;
    } catch (error) {
      throw error;
    }
  }

  //제본
  getBinding() {
    try {
      const binding = this.bindingRepository.find();
      if (!binding) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '단위가져오기실패 ',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return binding;
    } catch (error) {
      throw error;
    }
  }

  createBinding(bindingDto: BindingDto) {
    try {
      const binding = new Binding();
      binding.direction = bindingDto.direction;
      binding.method = bindingDto.method;
      const saveBinding = this.bindingRepository.save(binding);
      if (!saveBinding) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '제본생성실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return new HttpException(
        {
          status: HttpStatus.CREATED,
          message: '제본생성성공',
          saveBinding,
        },
        HttpStatus.CREATED,
      );
    } catch (error) {
      throw error;
    }
  }

  deleteBinding(bindingId) {
    try {
      const deleteBinding = this.bindingRepository.delete({ id: bindingId });
      if (!deleteBinding) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '삭제실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      console.log(deleteBinding);
      return new HttpException(
        {
          status: HttpStatus.OK,
          message: '제본삭제성공',
        },
        HttpStatus.CREATED,
      );
    } catch (error) {
      throw error;
    }
  }

  async updateBinding(bindingId, updateBindingDto: UpdateBindingDto) {
    try {
      const updateBinding = await this.bindingRepository.findOne({
        id: bindingId,
      });
      if (!updateBinding) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '제본아이디불일치',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      updateBinding.method = updateBindingDto.method;
      updateBinding.direction = updateBindingDto.direction;
      const updateBindingCheck = this.bindingRepository.save(updateBinding);
      if (!updateBindingCheck) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '수정불가',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      console.log(updateBindingCheck);
      return new HttpException(
        {
          status: HttpStatus.OK,
          message: '제본수정성공',
        },
        HttpStatus.OK,
      );
    } catch (error) {
      throw error;
    }
  }

  searchBinding() {
    try {
      return '제본 검색';
    } catch (error) {
      throw error;
    }
  }

  // 용지
  getPaper() {
    try {
      const paper = this.paperRepository.find();
      if (!paper) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '용지가져오기실패 ',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return paper;
    } catch (error) {
      throw error;
    }
  }

  createPaper(paperDto: PaperDto) {
    try {
      const paper = new Paper();
      paper.paperName = paperDto.paperName;
      paper.paperColor = paperDto.paperColor;
      paper.paperWeight = paperDto.paperWeight;
      paper.paperSize = paperDto.paperSize;
      paper.manufacturer = paperDto.manufacturer;
      paper.series = paperDto.series;
      paper.grain = paperDto.grain;
      paper.market_price = paperDto.market_price;
      paper.discount_rate = paperDto.discount_rate;
      paper.purchase_unit_price = paperDto.purchase_unit_price;
      paper.margin_rate = paperDto.margin_rate;
      paper.sales_unit_price = paperDto.sales_unit_price;
      const savePaper = this.paperRepository.save(paper);
      if (!savePaper) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '용지생성실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return savePaper;
    } catch (error) {
      throw error;
    }
  }

  deletePaper(paperId) {
    try {
      const Paper = this.paperRepository.findOne({
        id: paperId,
      });
      if (!Paper) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '잘못된용지아이디',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      const deletePaper = this.paperRepository.delete({
        id: paperId,
      });
      if (!deletePaper) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '삭제실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return new HttpException(
        {
          status: HttpStatus.OK,
          message: '용지삭제성공',
        },
        HttpStatus.OK,
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePaper(paperId, updatePaperDto: UpdatePaperDto) {
    try {
      console.log(updatePaperDto);
      const updatePaper = await this.paperRepository.findOne({ id: paperId });
      if (!updatePaper) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '용지없음',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      updatePaper.paperName = updatePaperDto.paperName;
      updatePaper.paperColor = updatePaperDto.paperColor;
      updatePaper.paperWeight = updatePaperDto.paperWeight;
      updatePaper.paperSize = updatePaperDto.paperSize;
      updatePaper.manufacturer = updatePaperDto.manufacturer;
      updatePaper.series = updatePaperDto.series;
      updatePaper.grain = updatePaperDto.grain;
      updatePaper.market_price = updatePaperDto.market_price;
      updatePaper.discount_rate = updatePaperDto.discount_rate;
      updatePaper.purchase_unit_price = updatePaperDto.purchase_unit_price;
      updatePaper.margin_rate = updatePaperDto.margin_rate;
      updatePaper.sales_unit_price = updatePaperDto.sales_unit_price;
      const updatePaperCheck = this.paperRepository.save(updatePaper);
      if (!updatePaperCheck) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '수정실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return new HttpException(
        {
          status: HttpStatus.OK,
          message: '용지수정성공',
        },
        HttpStatus.OK,
      );
    } catch (error) {
      throw error;
    }
  }

  searchPaper() {
    try {
      return '용지 검색';
    } catch (error) {
      throw error;
    }
  }

  //규격
  getDocuSpec() {
    try {
      const docuSpec = this.docuspecRepository.find();
      if (!docuSpec) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '규격가져오기실패 ',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return docuSpec;
    } catch (error) {
      throw error;
    }
  }

  createDocuSpec(docuspec: DocuSpecDto) {
    try {
      const docuSpec = new Docu_spec();
      docuSpec.name = docuspec.name;
      docuSpec.size = docuspec.size;
      docuSpec.cut = +docuspec.cut;
      docuSpec.series = docuspec.series;
      docuSpec.grain = docuspec.grain;
      const saveDocuSpec = this.docuspecRepository.save(docuSpec);
      if (!saveDocuSpec) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '규격생성실패 ',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return saveDocuSpec;
    } catch (error) {
      throw error;
    }
  }

  deleteDocuSpec(docuspecId) {
    try {
      const deleteDocuSpec = this.docuspecRepository.delete({ id: docuspecId });
      if (!deleteDocuSpec) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '삭제실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return new HttpException(
        {
          status: HttpStatus.OK,
          message: '규격삭제성공',
          deleteDocuSpec,
        },
        HttpStatus.OK,
      );
    } catch (error) {
      throw error;
    }
  }

  async updateDocuSpec(docuSepcId, updateDocuSpecDto: UpdateDocuSpecDto) {
    try {
      const updateDocuSpec = await this.docuspecRepository.findOne({
        id: docuSepcId,
      });
      if (!updateDocuSpec) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '수정할 사이즈 없음',
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      updateDocuSpec.size = updateDocuSpecDto.size;
      updateDocuSpec.name = updateDocuSpecDto.name;
      updateDocuSpec.cut = +updateDocuSpecDto.cut;
      updateDocuSpec.series = updateDocuSpecDto.series;
      updateDocuSpec.grain = updateDocuSpecDto.grain;
      const updateDocuSpecCheck = await this.docuspecRepository.save(
        updateDocuSpec,
      );
      console.log(updateDocuSpecCheck);
      if (!updateDocuSpecCheck) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '수정실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return new HttpException(
        {
          status: HttpStatus.OK,
          message: '규격수정성공',
        },
        HttpStatus.OK,
      );
    } catch (error) {
      throw error;
    }
  }

  searchDocuSpec() {
    try {
      return '규격 검색';
    } catch (error) {
      throw error;
    }
  }
  // 공정
  getPostProcess() {
    try {
      const getPostProcess = this.processRepository.find();
      if (!getPostProcess) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '후가공가져오기실패 ',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return getPostProcess;
    } catch (error) {
      throw error;
    }
  }

  createPostProcess(postProcessDto: PostProcessDto) {
    try {
      const postProcess = new Process();
      postProcess.kind = postProcessDto.kind;
      postProcess.name = postProcessDto.name;
      postProcess.standard_circulation = postProcessDto.standard_circulation;
      postProcess.market_price = postProcessDto.market_price;
      postProcess.discount_rate = postProcessDto.discount_rate;
      postProcess.purchase_unit_price = postProcessDto.purchase_unit_price;
      postProcess.margin_rate = postProcessDto.margin_rate;
      postProcess.sales_unit_price = postProcessDto.sales_unit_price;
      const createPostProcess = this.processRepository.save(postProcess);
      if (!createPostProcess) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '후가공생성실패 ',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return createPostProcess;
    } catch (error) {
      throw error;
    }
  }

  deletePostProcess(postProcessId) {
    try {
      const deletePostProcess = this.processRepository.delete({
        id: postProcessId,
      });
      if (!deletePostProcess) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '후가공삭제실패 ',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return new HttpException(
        {
          status: HttpStatus.OK,
          message: '후가공삭제성공',
        },
        HttpStatus.OK,
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePostProcess(
    postProcessId,
    updatePostProcessDto: UpdatePostProcessDto,
  ) {
    try {
      const updatePostProcess = await this.processRepository.findOne({
        id: postProcessId,
      });
      if (!updatePostProcess) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '후가공없음 ',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      console.log(updatePostProcessDto);
      updatePostProcess.kind = updatePostProcessDto.kind;
      updatePostProcess.name = updatePostProcessDto.name;
      updatePostProcess.standard_circulation =
        updatePostProcessDto.standard_circulation;
      updatePostProcess.market_price = updatePostProcessDto.market_price;
      updatePostProcess.discount_rate = updatePostProcessDto.discount_rate;
      updatePostProcess.purchase_unit_price =
        updatePostProcessDto.purchase_unit_price;
      updatePostProcess.margin_rate = updatePostProcessDto.margin_rate;
      updatePostProcess.sales_unit_price =
        updatePostProcessDto.sales_unit_price;
      const updatePostProcessCheck = this.processRepository.save(
        updatePostProcess,
      );
      if (!updatePostProcessCheck) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '후가공수정안됨 ',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return new HttpException(
        {
          status: HttpStatus.OK,
          message: '후가공수정성공',
        },
        HttpStatus.OK,
      );
    } catch (error) {
      throw error;
    }
  }

  searchPostProcess() {
    try {
      return '공정 검색';
    } catch (error) {
      throw error;
    }
  }

  //페이지옵션
  async getPageOption() {
    try {
      const getPageOption = await this.pageOptionRepository.find();
      if (!getPageOption) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '페이지옵션가져오기실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return getPageOption;
    } catch (error) {
      throw error;
    }
  }

  createPageOption(pageOptionDto: PageOptionDto) {
    try {
      const pageOption = new PageOption();
      pageOption.pageOption = pageOptionDto.pageOption;
      const savePageOption = this.pageOptionRepository.save(pageOption);
      if (!savePageOption) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '페이지옵션생성실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return new HttpException(
        {
          status: HttpStatus.CREATED,
          message: '페이지옵션생성',
        },
        HttpStatus.CREATED,
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  deletePageOption(pageOptionId) {
    try {
      const deletePageOption = this.pageOptionRepository.delete({
        id: pageOptionId,
      });
      if (!deletePageOption) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '페이지옵션삭제실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return new HttpException(
        {
          status: HttpStatus.OK,
          message: '페이지옵션삭제',
        },
        HttpStatus.OK,
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePageOption(
    pageOptionId,
    updatePageOptionDto: UpdatePageOptionDto,
  ) {
    try {
      const updatePageOption = await this.pageOptionRepository.findOne({
        id: pageOptionId,
      });
      if (!updatePageOption) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '페이지옵션없음',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      updatePageOption.pageOption = updatePageOptionDto.pageOption;
      const updatePageOptionCheck = this.pageOptionRepository.save(
        updatePageOption,
      );
      if (!updatePageOptionCheck) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '페이지옵션수정실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return new HttpException(
        {
          status: HttpStatus.OK,
          message: '페이지옵션수정성공',
        },
        HttpStatus.OK,
      );
    } catch (error) {
      throw error;
    }
  }

  searchPageOption() {
    try {
      return '페이지옵션 검색';
    } catch (error) {
      throw error;
    }
  }

  getPrintMethod() {
    try {
      const getPrintMethod = this.printMethodRepository.find();
      if (!getPrintMethod) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '인쇄도수읽기실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return getPrintMethod;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  createPrintMethod(printMethodDto: CreatePrintMethodDto) {
    try {
      const printMethod = new PrintMethod();
      printMethod.name = printMethodDto.name;
      printMethod.plusColor = printMethodDto.plusColor;
      const createPrintMethod = this.printMethodRepository.save(printMethod);
      if (!createPrintMethod) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '인쇄도수생성실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return new HttpException(
        {
          status: HttpStatus.OK,
          message: '인쇄도수생성성공',
          printMethod: createPrintMethod,
        },
        HttpStatus.OK,
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  deletePrintMethod(printMethodId) {
    try {
      const deletePrintMethod = this.printMethodRepository.delete({
        id: printMethodId,
      });
      if (!deletePrintMethod) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '인쇄도수삭제실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return new HttpException(
        {
          status: HttpStatus.OK,
          message: '인쇄도수삭제성공',
          deletePrintMethod: deletePrintMethod,
        },
        HttpStatus.OK,
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createSort(createSort) {
    try {
      for (let i = 0; i < createSort.sort.length; i++) {
        const sort = new ProductSort();
        sort.sort = createSort.sort[i].sort;
        sort.positionName = createSort.sort[i].name;
        sort.product = createSort.id;
        console.log(sort);
        const saveSort = await this.productSortRepository.save(sort);
        if (!saveSort) {
          throw new HttpException(
            {
              status: HttpStatus.BAD_REQUEST,
              error: '순서 저장 실패',
            },
            HttpStatus.BAD_REQUEST,
          );
        }
      }
      return new HttpException(
        {
          status: HttpStatus.OK,
          message: '순서생성성공',
        },
        HttpStatus.OK,
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
