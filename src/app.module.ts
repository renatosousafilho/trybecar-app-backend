import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassengersModule } from './passengers/passengers.module';
import { SequelizeModule } from '@nestjs/sequelize';
import Passenger from './passengers/passenger.model';

@Module({
  imports: [
    PassengersModule,
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: ':memory:',
      autoLoadModels: true,
      synchronize: true,
      models: [Passenger],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
