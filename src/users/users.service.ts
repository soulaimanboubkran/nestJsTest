import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

import { createUser, CreateUserProfileParams, UpdateUserParams } from 'src/utils/types';
import { Profile } from './entities/profile.entity';
@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepo: Repository<User>,
        @InjectRepository(Profile)
        private prfileRepo: Repository<Profile>,
    ){}

   register(userD : createUser){
    const newUser =this.usersRepo.create({
        ...userD
    })
    return this.usersRepo.save(newUser);
  }

  updateUser(id:number,updateUserD:UpdateUserParams){
    return this.usersRepo.update({id},{... updateUserD})
  }

  deleteUser(id:number){
    return this.usersRepo.delete({id})
  }

  async createProfile(id:number,profileD:CreateUserProfileParams){
    const user = await this.usersRepo.findOneBy({id});
    if (!user)
        throw new HttpException(
          'User not found. Cannot create Profile',
          HttpStatus.BAD_REQUEST,
        );
    const newProfile = this.prfileRepo.create(profileD);
    const savedProfile = await this.prfileRepo.save(newProfile);
    user.profile= savedProfile;    
    return this.usersRepo.save(user)
  }
  

}
