import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tvseries } from './entity/tvseries.model';
import { CreateTvseriesDTO } from './dto/create-tvseries.dto';

@Injectable()
export class TvseriesService {
    constructor(
        @InjectModel(Tvseries)
        private readonly tvSeriesrepo: typeof Tvseries
    ) {}

    create(tvSeriesDto: Partial<CreateTvseriesDTO>) {
        return this.tvSeriesrepo.create(tvSeriesDto);
    }

    findAll() {
       return  this.tvSeriesrepo.findAll();
    }

    findById(id: string) {
        return this.tvSeriesrepo.findByPk(id);
    }
}
