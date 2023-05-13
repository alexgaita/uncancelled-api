import { Model } from "sequelize-typescript";
import { Tvseries } from "src/tvseries/entity/tvseries.model";
export declare class Seasons extends Model<Seasons> {
    id: string;
    seriesId: string;
    seasonNumber: string;
    coverPhoto: string;
    tvseriesId: string;
    tvSery: Tvseries;
}
