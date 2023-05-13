import { Injectable } from '@nestjs/common';
import { CreateTvseryDto } from './dto/create-tvsery.dto';
import { UpdateTvseryDto } from './dto/update-tvsery.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Tvsery } from './entities/tvsery.entity';

@Injectable()
export class TvseriesService {

  constructor(
    @InjectModel(Tvsery)
    private readonly tvSeries: typeof Tvsery
  ) {}

  create(createTvseryDto: CreateTvseryDto) {
    return this.tvSeries.create(createTvseryDto);
  }

  findAll() {
    return  this.tvSeries.findAll();
  }

  findOne(id: string) {
    return this.tvSeries.findByPk(id);
  }

  update(id: string, updateTvseryDto: UpdateTvseryDto) {
    //return this.tvSeries.update(id, updateTvseryDto);
    return '';
  }

  remove(id: string) {
    return this.remove(id);
  }
}
