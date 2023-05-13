import { Injectable } from '@nestjs/common';
import { CreateTvseryDto } from './dto/create-tvsery.dto';
import { UpdateTvseryDto } from './dto/update-tvsery.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Tvsery } from './entities/tvsery.entity';

@Injectable()
export class TvseriesService {

  constructor(
    // @InjectModel(Tvsery)
    // private readonly tvSeryModel: typeof Tvsery,
  ) {}

  create(createTvseryDto: CreateTvseryDto) {
    // this.tvSeryModel.create(createTvseryDto);
    return '';
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
