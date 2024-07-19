import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Country } from './entities/country.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Product,Country])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
