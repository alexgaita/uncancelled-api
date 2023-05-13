import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Art } from "src/scenario/entities/art.entity";
import { Audio } from "src/scenario/entities/audio.entity";
import { Episodes } from "src/scenario/entities/episodes.entity";
import { Paragraph } from "src/scenario/entities/paragraph.entity";
import { Scenario } from "src/scenario/entities/scenario.entity";
import { Seasons } from "src/scenario/entities/seasons.entity";
import { Tags } from "src/scenario/entities/tags.entity";
import { Tvsery } from "src/tvseries/entities/tvsery.entity";

@Module({
    imports: [SequelizeModule.forRoot({
        database: 'uncancelled',
        username: 'twoandhalfdev',
        password: '123',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        synchronize: true,
        autoLoadModels: true,
        models: [Tvsery, Seasons, Tags, Episodes, Scenario, Paragraph, Art, Audio]
     })
    ]
})
export class DatabaseModule {

}