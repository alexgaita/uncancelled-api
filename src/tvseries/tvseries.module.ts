import { Module } from '@nestjs/common';
import { TvseriesService } from './tvseries.service';
import { TvseriesController } from './tvseries.controller';
import { DatabaseModule } from 'src/shared/database.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tvsery } from './entities/tvsery.entity';

@Module({
  imports: [DatabaseModule, SequelizeModule.forFeature([Tvsery])],
  controllers: [TvseriesController],
  providers: [TvseriesService]
})
export class TvseriesModule {}
