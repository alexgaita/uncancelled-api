import { Module } from '@nestjs/common';
import { SeasonsService } from './seasons.service';
import { DatabaseModule } from "../shared/database.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { Seasons } from "./entity/seasons.model";
import { SeasonsController } from "./seasons.controller";
import { SeasonsRepository } from "./seasons.repository";

@Module({
  imports: [
    DatabaseModule,
    SequelizeModule.forFeature([Seasons]),
    SeasonsModule,
  ],
  controllers: [SeasonsController],
  providers: [SeasonsService, SeasonsRepository],
})
export class SeasonsModule {}
