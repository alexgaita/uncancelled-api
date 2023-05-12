import { Injectable } from '@nestjs/common';
import { CreateTvseryDto } from './dto/create-tvsery.dto';
import { UpdateTvseryDto } from './dto/update-tvsery.dto';

@Injectable()
export class TvseriesService {
  create(createTvseryDto: CreateTvseryDto) {
    return 'This action adds a new tvsery';
  }

  findAll() {
    return `This action returns all tvseries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tvsery`;
  }

  update(id: number, updateTvseryDto: UpdateTvseryDto) {
    return `This action updates a #${id} tvsery`;
  }

  remove(id: number) {
    return `This action removes a #${id} tvsery`;
  }
}
