import { Module } from '@nestjs/common';
import { SeasonsService } from './seasons.service';

@Module({
  providers: [SeasonsService]
})
export class SeasonsModule {}
