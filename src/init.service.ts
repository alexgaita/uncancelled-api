import { Injectable, OnModuleInit } from "@nestjs/common";
import * as file1 from '../data/file1.json';
import * as file2 from '../data/file2.json';
import * as file3 from '../data/file3.json';
import * as file4 from '../data/file4.json';
import * as file5 from '../data/file5.json';
import * as file6 from '../data/file6.json';
import * as file7 from '../data/file7.json';
import * as file8 from '../data/file8.json';
import { InjectModel } from "@nestjs/sequelize";
import { Tvseries } from "./tvseries/entity/tvseries.model";
import { CreateTvseriesDTO } from "./tvseries/dto/create-tvseries.dto";

@Injectable()
export class InitService implements OnModuleInit{

    constructor(
        @InjectModel(Tvseries)
        private readonly tvSeriesRepo: typeof Tvseries
    ) {}

    async onModuleInit() {
       
        const files = [
            file1,
            file2,
            file3,
            file4,
            file5,
            file6,
            file7,
            file8,
        ];

        console.log(files);
        try {
            for (const file of files) {
                const tvseries: Partial<CreateTvseriesDTO> = new CreateTvseriesDTO();

                tvseries.wallpaper = file['backdrop_path'];
                tvseries.status = 'ongoing';
                tvseries.description = file['overview'];
                tvseries.name =  file['name'];
                // tvseries.seasons = file['seasons'];
                console.log(file['seasons']);
                await this.tvSeriesRepo.create(tvseries); 
            }

        } catch (error) {
            console.error('Ooops: ', error);
        }
    }
}