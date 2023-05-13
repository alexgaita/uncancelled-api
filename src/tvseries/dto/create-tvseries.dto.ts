import { CreateSeasonsDTO } from "src/seasons/dto/create-seasons.dto";
import { Seasons } from "src/seasons/entity/seasons.model";
import { CreateTagDTO } from "src/tag/dto/create-tag.dto";
import { Tag } from "src/tag/entity/tag.model";

export class CreateTvseriesDTO {
    id?: string;
    name: string;
    tvmovieid: string;
    status: string;
    description: string;
    wallpaper: string;
    userScore: string;
    seasons: Seasons[];
    tags: Tag[];
    [key: number]: any;
}