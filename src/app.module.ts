import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TvseriesModule } from './tvseries/tvseries.module';
import { ScenarioModule } from './scenario/scenario.module';
import { DatabaseModule } from './shared/database.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [TvseriesModule, ScenarioModule, DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
