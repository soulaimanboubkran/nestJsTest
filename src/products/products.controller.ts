import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { createProduct } from './dto/create-product.dto';


@Controller('products')
export class ProductsController {

    constructor(private readonly ProductsService: ProductsService ) {}
    @Get()
    getP(){
         return this.ProductsService.findAll();
    }
    @Post()
    createP(@Body() createProductDto:createProduct){
        return this.ProductsService.createProduct(createProductDto);
    }
}
