import { Injectable, NotFoundException } from '@nestjs/common';
import { User, UserDto } from 'src/models/index';
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private readonly userModel: typeof User,
        private readonly sequelize: Sequelize
    ) { }

    create(userDto: UserDto): Promise<User> {
        const user = new User();
        user.firstName = userDto.firstName;
        user.lastName = userDto.lastName;
        user.password = userDto.password;
        user.age = userDto.age;
        user.isActive = userDto.isActive;
        return user.save();
    }

    findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    findOne(id: number): Promise<User> {
        return this.userModel.findOne({
            where: {
                id: id
            }
        });
    }

    async delete(id:number): Promise<void> {
        this.userModel.destroy({
            where:{
                id:id
            }
        });
    }
}