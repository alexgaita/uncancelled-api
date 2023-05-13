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
<<<<<<< HEAD
// import { InitService } from './init.service';

@Module({
  imports: [
    TvseriesModule,
    SeasonsModule,
    ChatgptModule,
    EpisodesModule,
    ScenarioModule,
    TagModule,
    ParagraphModule,
  ],
=======
import { InitService } from './init.service';
import { DatabaseModule } from './shared/database.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tvseries } from './tvseries/entity/tvseries.model';
import { TvseriesService } from './tvseries/tvseries.service';

@Module({
  imports: [TvseriesModule, SeasonsModule, ChatgptModule, EpisodesModule, ScenarioModule, TagModule, ParagraphModule,
  DatabaseModule, SequelizeModule.forFeature([Tvseries])],
>>>>>>> 19102c16 (apc: implement stuff)
  controllers: [AppController],
  providers: [AppService/*, InitService*/],
})
export class AppModule {}
