import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ProfileDto } from './dto/profile.dto';

@Controller('users')
export class UsersController {


    constructor(private readonly usersService:UsersService){}


    @Post()
    createP(@Body() userDto:ProfileDto){
      this.usersService.register(userDto)
    }
}
