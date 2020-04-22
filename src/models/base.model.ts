import {
    Column, CreatedAt, Default, DeletedAt, IsUUID, Model, PrimaryKey, DataType, Table,
    UpdatedAt
} from 'sequelize-typescript';

@Table
export class BaseModel<T> extends Model<T> {
 
    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedDate: Date;

    @DeletedAt
    deletionDate: Date;
}