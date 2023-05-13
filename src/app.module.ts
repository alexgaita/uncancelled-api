import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TvseriesModule } from './tvseries/tvseries.module';
import { ScenarioModule } from './scenario/scenario.module';
import { DatabaseModule } from './shared/database.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MagicGptService } from './magic-gpt/magic-gpt.service';

@Module({
  imports: [
    TvseriesModule,
    ScenarioModule,
    DatabaseModule,
    HttpModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, MagicGptService],
})
export class AppModule {}
