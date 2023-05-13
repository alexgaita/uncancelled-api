import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Episodes } from "src/episodes/entity/episodes.entity";
import { Seasons } from "src/seasons/entity/seasons.model";
import { Tvseries } from "src/tvseries/entity/tvseries.model";
// import dotenv from 'dotenv';
// import path from 'path';

// dotenv.config({ path: path.resolve(__dirname, '../../.env') });

@Module({
    imports: [SequelizeModule.forRoot({
        database: 'uncancelled',
        username: 'root',
        password: '123',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        synchronize: true,
        autoLoadModels: true,
        models: [Tvseries, Seasons, Episodes]
     })]
})
export class DatabaseModule {

}