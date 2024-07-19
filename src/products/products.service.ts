import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { createProduct } from './dto/create-product.dto';

@Injectable()
export class ProductsService {


    constructor(@InjectRepository(Product)
    private readonly ProductRepo:Repository<Product>
){}

async findAll() : Promise<Product[]>{
    return this.ProductRepo.find();
}

async createProduct (createProductDto:createProduct):Promise<Product> {
    const Product = this.ProductRepo.create(createProductDto)
    return this.ProductRepo.save(Product)
}
}
