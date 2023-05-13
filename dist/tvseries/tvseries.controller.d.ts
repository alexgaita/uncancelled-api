import { TvseriesService } from './tvseries.service';
import { CreateTvseriesDTO } from './dto/create-tvseries.dto';
export declare class TvseriesController {
    private readonly tvseriesService;
    constructor(tvseriesService: TvseriesService);
    create(tvSeriesDto: CreateTvseriesDTO): Promise<import("./entity/tvseries.model").Tvseries>;
    findAll(): Promise<import("./entity/tvseries.model").Tvseries[]>;
    findById(id: string): Promise<import("./entity/tvseries.model").Tvseries>;
}
