import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Passenger from './passenger.model';

// Data Transfer Object (DTO)
export type CreatePassengerDTO = {
  name: string;
  email: string;
  phone: string;
};

@Injectable()
export class PassengersService {
  constructor(
    @InjectModel(Passenger)
    private passengerModel: typeof Passenger,
  ) {}

  list() {
    return this.passengerModel.findAll();
  }

  create(input: CreatePassengerDTO) {
    return this.passengerModel.create({
      name: input.name,
      email: input.email,
      phone: input.phone,
    });
  }
}
