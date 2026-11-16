import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';

@Injectable()
export class TravelService {
  create(createTravelDto: CreateTravelDto) {
    return 'planifier un nouveau voyage';
  }

 findAll() {
  return [
    { id: 1, name: "to china", price: 9000 },
    { id: 2, name: "to Morocco", price: 4000 }
  ];
}

  findOne(id: number) {
    if (id === 1) {
      return { id: 1, name: "to china", price: 9000 };
    }
    if (id === 2) {
      return { id: 2, name: "to Morocco", price: 4000 };
    }
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
}
