import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Episodes } from "src/episodes/entity/episodes.entity";
import { Art } from "src/paragraph/entity/art.model";
import { Audio } from "src/paragraph/entity/audio.entity";
import { Paragraph } from "src/paragraph/entity/paragraph.model";
import { Scenario } from "src/scenario/entity/scenario.model";
import { Seasons } from "src/seasons/entity/seasons.model";
import { Tag } from "src/tag/entity/tag.model";
import { Tvseries } from "src/tvseries/entity/tvseries.model";

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
        models: [Tvseries, Seasons, Episodes, Scenario, Tag, Paragraph, Art, Audio]
     })]
})
export class DatabaseModule {

}