import { Module } from '@nestjs/common';
import { PassengersController } from './passengers.controller';
import { PassengersService } from './passengers.service';
import { SequelizeModule } from '@nestjs/sequelize';
import Passenger from './passenger.model';

@Module({
  controllers: [PassengersController],
  // Inversion of Controller
  providers: [PassengersService],
  imports: [SequelizeModule.forFeature([Passenger])],
})
export class PassengersModule {}
