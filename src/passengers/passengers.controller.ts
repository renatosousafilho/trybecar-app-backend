import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePassengerDTO, PassengersService } from './passengers.service';

@Controller('passengers')
export class PassengersController {
  constructor(private readonly passengersService: PassengersService) {}

  @Get()
  getPassengers() {
    return this.passengersService.list();
  }

  @Post()
  createPassenger(@Body() input: CreatePassengerDTO) {
    return this.passengersService.create(input);
  }
}
