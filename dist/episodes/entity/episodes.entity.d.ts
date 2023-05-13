import { Model } from "sequelize-typescript";
import { Seasons } from "src/seasons/entity/seasons.model";
export declare class Episodes extends Model<Episodes> {
    id: string;
    episodeNumber: number;
    episodeName: string;
    episodeDescription: string;
    thumbnail: string;
    seasonsId: string;
    seasons: Seasons;
}
