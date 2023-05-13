import { Module } from '@nestjs/common';
import { ScenarioController } from './scenario.controller';
import { ScenarioService } from './scenario.service';
import { DatabaseModule } from 'src/shared/database.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Scenario } from './entity/scenario.model';
import { ChatgptService } from '../chatgpt/chatgpt.service';
import { TvseriesService } from '../tvseries/tvseries.service';
import { HttpModule } from '@nestjs/axios';
import { Tvseries } from 'src/tvseries/entity/tvseries.model';

@Module({
  imports: [DatabaseModule, SequelizeModule.forFeature([Tvseries, Scenario]), HttpModule],
  controllers: [ScenarioController],
  providers: [ScenarioService, ChatgptService, TvseriesService],
})
export class ScenarioModule {}
