import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SeasonsService } from './seasons.service';

@Controller('seasons')
export class SeasonsController {
  constructor(private readonly seasonsService: SeasonsService) {}

  @Get(':id')
    findByTvSeriesId(@Param('id') id: string) {
    return this.seasonsService.findByTvSeriesId(id);
    }
}
