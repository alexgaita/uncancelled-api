import { Module } from '@nestjs/common';
import { ScenarioController } from './scenario.controller';
import { ScenarioService } from './scenario.service';
import { DatabaseModule } from 'src/shared/database.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Scenario } from './entity/scenario.model';

@Module({
  imports: [DatabaseModule, SequelizeModule.forFeature([Scenario])],
  controllers: [ScenarioController],
  providers: [ScenarioService]
})
export class ScenarioModule {}
