import { Module } from '@nestjs/common';
import { TvseriesService } from './tvseries.service';
import { TvseriesController } from './tvseries.controller';

@Module({
  controllers: [TvseriesController],
  providers: [TvseriesService]
})
export class TvseriesModule {}
