import { Module } from '@nestjs/common';
import { ScenarioController } from './scenario.controller';
import { ScenarioService } from './scenario.service';
import { DatabaseModule } from 'src/shared/database.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Scenario } from './entity/scenario.model';
import { ChatgptService } from '../chatgpt/chatgpt.service';
import { TvseriesService } from '../tvseries/tvseries.service';

@Module({
  imports: [DatabaseModule, SequelizeModule.forFeature([Scenario])],
  controllers: [ScenarioController],
  providers: [ScenarioService, ChatgptService, TvseriesService],
})
export class ScenarioModule {}
