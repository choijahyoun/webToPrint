import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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

import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      LargeCategory,
      MediumCategory,
      Product,
      Docu_spec,
      Binding,
      Process,
      PageOption,
      Unit,
      Paper,
      PrintMethod,
      ProductSort,
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
