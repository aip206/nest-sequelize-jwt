import { Column, Table, BeforeCreate } from 'sequelize-typescript';
import { BaseModel } from './base.model';
const bcrypt = require('bcrypt');
@Table(
    {
        tableName: 'user'
    }
)
export class User extends BaseModel<User> {

    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    age: number;

    @Column
    password: String

    @Column({ defaultValue: true })
    isActive: boolean;

    @BeforeCreate
    static hashPassword(user) {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
    }
}