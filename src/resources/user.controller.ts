import { Controller,
    Post,
    Body,
    Get,
    Delete, 
    UseInterceptors,
    Param} from '@nestjs/common';
import { UserDto } from 'src/models/dto/user.dto';
import { UserService } from 'src/services/user.service';
import { TransformInterceptor } from 'src/shared/interceptor/transform.interceptor';
import { UserResponse } from 'src/models/dto/user.response';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService:UserService
    ){}

    @Post()
    create(@Body()user: UserDto){
        const response = this.userService.create(user);
        return response;
    }

    @Get(':id')
    @UseInterceptors(new TransformInterceptor(UserResponse))
    findOne(@Param() params){
        console.log(params.id)
        return this.userService.findOne(params.id);
    }

    @Get()
    @UseInterceptors(new TransformInterceptor(UserResponse))
    getAll(){
        return this.userService.findAll();
    }
}