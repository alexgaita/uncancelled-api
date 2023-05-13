import { Model } from 'sequelize-typescript';
import { Seasons } from 'src/seasons/entity/seasons.model';
import { Tag } from 'src/tag/entity/tag.model';
export declare class Tvseries extends Model {
    id: string;
    tvmovieid: string;
    status: string;
    description: string;
    wallpaper: string;
    userScore: string;
    seasons: Seasons[];
    tags: Tag[];
    static assignId(instance: Tvseries): void;
}
