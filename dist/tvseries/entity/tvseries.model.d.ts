import { Model } from 'sequelize-typescript';
import { Seasons } from 'src/seasons/entity/seasons.model';
export declare class Tvseries extends Model {
    id: string;
    tvmovieid: string;
    status: string;
    description: string;
    wallpaper: string;
    userScore: string;
    seasons: Seasons[];
    static assignId(instance: Tvseries): void;
}
