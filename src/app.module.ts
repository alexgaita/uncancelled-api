import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TvseriesModule } from './tvseries/tvseries.module';
import { SeasonsModule } from './seasons/seasons.module';
import { ChatgptModule } from './chatgpt/chatgpt.module';
import { HttpService } from '@nestjs/axios';
import { EpisodesModule } from './episodes/episodes.module';

@Module({
  imports: [TvseriesModule, SeasonsModule, ChatgptModule, EpisodesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
