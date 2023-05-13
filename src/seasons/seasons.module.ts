import { Module } from '@nestjs/common';
import { SeasonsService } from './seasons.service';
import { Sequelize } from 'sequelize';

@Module({
  providers: [SeasonsService]
})
export class SeasonsModule {}
