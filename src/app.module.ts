import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeConfig } from './config/database.module';
import { UserModule } from './modules/user.module';

@Module({
  imports: [SequelizeConfig, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
