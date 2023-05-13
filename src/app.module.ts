import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TvseriesModule } from './tvseries/tvseries.module';
import { ScenarioModule } from './scenario/scenario.module';
import { DatabaseModule } from './shared/database.module';

@Module({
  imports: [TvseriesModule, ScenarioModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
