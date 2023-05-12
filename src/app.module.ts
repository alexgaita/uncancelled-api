import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TvseriesModule } from './tvseries/tvseries.module';
import { ScenarioModule } from './scenario/scenario.module';

@Module({
  imports: [TvseriesModule, ScenarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
