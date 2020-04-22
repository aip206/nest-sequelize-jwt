import { Module } from "@nestjs/common";
import { UserController } from "src/resources/user.controller";
import { UserService } from "src/services/user.service";
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from "src/models";

@Module(
    {
        imports: [SequelizeModule.forFeature([User])],
        controllers: [UserController],
        providers: [UserService],
    }
)
export class UserModule {};