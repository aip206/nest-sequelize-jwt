import { SequelizeModule } from '@nestjs/sequelize';


export const SequelizeConfig = SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'mysecretpassword',
    database: 'nest_test',
    autoLoadModels: true,
    synchronize: true,
  });