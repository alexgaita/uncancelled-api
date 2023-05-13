import { Model } from "sequelize-typescript";
import { Episodes } from "src/episodes/entity/episodes.entity";
import { Scenario } from "src/scenario/entity/scenario.model";
import { Tvseries } from "src/tvseries/entity/tvseries.model";
export declare class Seasons extends Model<Seasons> {
    id: string;
    seriesId: string;
    seasonNumber: string;
    coverPhoto: string;
    episodes: Episodes[];
    scenario: Scenario[];
    tvseriesId: string;
    tvSery: Tvseries;
}
