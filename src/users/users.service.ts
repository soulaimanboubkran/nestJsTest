import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepo: Repository<User>,
    ){}

    async findOne(userName:string):Promise<User | undefined>{
        return this.usersRepo.findOneBy({userName});
    }

    async create(userDto : CreateUserDto):Promise<User>{
        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(userDto.password,salt)
        const user = this.usersRepo.create({
            ...userDto,
            password:hashedPass,
        });
        return this.usersRepo.save(user);

            }
}
