import { Body, Controller, Get, Post } from '@nestjs/common';
import { TvseriesService } from './tvseries.service';
import { CreateTvseriesDTO } from './dto/create-tvseries.dto';

@Controller('tvseries')
export class TvseriesController {
    constructor(
        private readonly tvseriesService: TvseriesService
    ) {}

    @Post()
    create(@Body() tvSeriesDto: CreateTvseriesDTO) {
        return this.tvseriesService.create(tvSeriesDto);
    }

    @Get()
    findAll() {
      return this.tvseriesService.findAll();
    }
}
