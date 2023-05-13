import { Module } from '@nestjs/common';
import { TvseriesController } from './tvseries.controller';
import { TvseriesService } from './tvseries.service';
import { TvseriesRepository } from './tvseries.repository';
import { DatabaseModule } from 'src/shared/database.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tvseries } from './entity/tvseries.model';
import { SeasonsModule } from 'src/seasons/seasons.module';

@Module({
  imports: [DatabaseModule, SequelizeModule.forFeature([Tvseries]), SeasonsModule],
  controllers: [TvseriesController],
  providers: [TvseriesService, TvseriesRepository]
})
export class TvseriesModule {}
