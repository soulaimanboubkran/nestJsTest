import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { createProduct } from './dto/create-product.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class ProductsService {


    constructor(
    @InjectRepository(Product)
    private readonly ProductRepo:Repository<Product>,
    @InjectRepository(Country)
    private readonly CountryRepo:Repository<Country>
){}

async findAll() : Promise<Product[]>{
    return this.ProductRepo.find({
        relations:['countries']
    });
}

async createProduct (createProductDto:createProduct):Promise<Product> {

    const countries = await Promise.all(
        createProductDto.countries.map(async countryName => {
          let country = await this.CountryRepo.findOneBy({ country: countryName });
          if (!country) {
            country = this.CountryRepo.create({ country: countryName });
            await this.CountryRepo.save(country);
          }
          return country;
        })
      );
    const Product = this.ProductRepo.create({...createProductDto,countries})
    return this.ProductRepo.save(Product)
}
}
