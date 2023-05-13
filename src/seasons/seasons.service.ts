import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Seasons } from './entity/seasons.model';

@Injectable()
export class SeasonsService {
  constructor(
    @InjectModel(Seasons)
    private readonly seasonsRepo: typeof Seasons,
  ) {}

  findByTvSeriesId(tvSeriesId: string) {
    return this.seasonsRepo.findAll({ where: { tvseriesId: tvSeriesId } });
  }
}
