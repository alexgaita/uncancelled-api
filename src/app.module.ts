import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TvseriesModule } from './tvseries/tvseries.module';
import { SeasonsModule } from './seasons/seasons.module';
import { ChatgptModule } from './chatgpt/chatgpt.module';
import { HttpService } from '@nestjs/axios';
import { EpisodesModule } from './episodes/episodes.module';
import { ScenarioModule } from './scenario/scenario.module';
import { TagModule } from './tag/tag.module';
import { ParagraphModule } from './paragraph/paragraph.module';
import { InitService } from './init.service';
import { DatabaseModule } from './shared/database.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tvseries } from './tvseries/entity/tvseries.model';

@Module({
  imports: [
    TvseriesModule,
    SeasonsModule,
    ChatgptModule,
    EpisodesModule,
    ScenarioModule,
    TagModule,
    ParagraphModule,
    DatabaseModule,
    SequelizeModule.forFeature([Tvseries])
  ],
  controllers: [AppController],
  providers: [AppService, InitService],
})
export class AppModule {}
