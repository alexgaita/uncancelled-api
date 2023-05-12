import { Test, TestingModule } from '@nestjs/testing';
import { TvseriesService } from './tvseries.service';

describe('TvseriesService', () => {
  let service: TvseriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TvseriesService],
    }).compile();

    service = module.get<TvseriesService>(TvseriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
