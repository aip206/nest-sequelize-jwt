import { plainToClass, Exclude, Expose } from 'class-transformer';
import { validate, IsString } from 'class-validator';

@Exclude()
export class UserResponse {
    @Expose()
    readonly id: number;

    @Expose()
    @IsString()
    readonly firstName: string;

    @Expose()
    readonly age: number;
}