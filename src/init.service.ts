import { Injectable, OnModuleInit } from "@nestjs/common";
import * as fs from 'fs';
import path, { join } from "path";
import * as file1 from '../data/file1.json';
import { file } from "@babel/types";
import { InjectModel } from "@nestjs/sequelize";
import { Tvseries } from "./tvseries/entity/tvseries.model";
import { CreateTvseriesDTO } from "./tvseries/dto/create-tvseries.dto";

@Injectable()
export class InitService implements OnModuleInit{

    constructor(
        @InjectModel(Tvseries)
        private readonly tvSeriesRepo: typeof Tvseries
    ) {}

    // {
    //     wallpaper: backdrop_path,
    //     status: hardcodat ongoing
    //     description: overview
    //     }

    async onModuleInit() {
        try {
           const { backdrop_path, overview, name } = file1;
           const tvseries: Partial<CreateTvseriesDTO> = new CreateTvseriesDTO();

           tvseries.wallpaper = backdrop_path;
           tvseries.status = 'ongoing';
           tvseries.description = overview;
           tvseries.name =  name;
           await this.tvSeriesRepo.create(tvseries); 

        } catch (error) {
            console.error('Ooops: ', error);
        }
    }
}