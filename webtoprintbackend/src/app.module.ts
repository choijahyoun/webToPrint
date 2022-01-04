import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { MakeModule } from './make/make.module';
import { JwtModule } from './jwt/jwt.module';
import { JwtMiddleware } from './jwt/jwt.middleware';
import { Make } from './make/entities/make.entity';
import { CommonModule } from './common/common.module';
import { RoleModule } from './role/role.module';
import { Verification } from './user/entities/verification.entity';
import { ShippingModule } from './shipping/shipping.module';
import { ShippingDestination } from './shipping/entities/shipping.entity';
import { FileModule } from './file/file.module';
import { FileUrl } from './file/entities/file.entity';
import { CartModule } from './cart/cart.module';
import { Cart } from './cart/entities/cart.entity';
import { AdminModule } from './admin/admin.module';
import { PaymentModule } from './payment/payment.module';
import { ProductModule } from './product/product.module';
import { LargeCategory } from './product/entities/largeCategory.entity';
import { MediumCategory } from './product/entities/mediumCategory.entity';
import { Product } from './product/entities/product.entity';
import { Docu_spec } from './product/entities/docu_spec.entity';
import { Binding } from './product/entities/binding.entity';
import { Process } from './product/entities/process.entity';
import { PageOption } from './product/entities/pageOption.entity';
import { Unit } from './product/entities/unit.entity';
import { Paper } from './product/entities/paper.entity';
import { OrderModule } from './order/order.module';
import { Order } from './order/entities/order.entity';
import { PageOptionDetail } from './order/entities/pageOptionDetail.entity';
import { PostProcessOrder } from './order/entities/postProcessOrder.entity';
import { PrintMethod } from './product/entities/printMethod.entity';
import { ProductSort } from './product/entities/sort.entity';
/*
  앱 모듈 작성 webtoprint데이터베이스 연결 
  제작자 : 최재현
  작성일자 : 2021.02.17

 */
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.dev.env' : '.test.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        User,
        Make,
        Verification,
        ShippingDestination,
        FileUrl,
        Cart,
        LargeCategory,
        MediumCategory,
        Product,
        Docu_spec,
        Binding,
        Process,
        PageOption,
        Unit,
        Paper,
        Order,
        PageOptionDetail,
        PostProcessOrder,
        PrintMethod,
        ProductSort,
      ],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    MakeModule,
    JwtModule.forRoot({
      privateKey: 'dlkjdiodjlfkjslkdjiflkdji',
    }),
    CommonModule,
    RoleModule,
    ShippingModule,
    FileModule,
    CartModule,
    AdminModule,
    PaymentModule,
    ProductModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes({
      path: '/',
      method: RequestMethod.ALL,
    });
  }
}
