import { Tvseries } from './entity/tvseries.model';
import { CreateTvseriesDTO } from './dto/create-tvseries.dto';
export declare class TvseriesService {
    private readonly tvSeriesrepo;
    constructor(tvSeriesrepo: typeof Tvseries);
    create(tvSeriesDto: CreateTvseriesDTO): Promise<Tvseries>;
    findAll(): Promise<Tvseries[]>;
    findById(id: string): Promise<Tvseries>;
}
