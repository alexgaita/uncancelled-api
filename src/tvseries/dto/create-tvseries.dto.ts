import { CreateSeasonsDTO } from "src/seasons/dto/create-seasons.dto";
import { CreateTagDTO } from "src/tag/dto/create-tag.dto";

export class CreateTvseriesDTO {
  tvmovieid: string;
  status: string;
  description: string;
  wallpaper: string;
  userScore: string;
  //seasons?: CreateSeasonsDTO[];
  //tags?: CreateTagDTO[];
}