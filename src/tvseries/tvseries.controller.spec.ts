import { Test, TestingModule } from '@nestjs/testing';
import { TvseriesController } from './tvseries.controller';
import { TvseriesService } from './tvseries.service';

describe('TvseriesController', () => {
  let controller: TvseriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TvseriesController],
      providers: [TvseriesService],
    }).compile();

    controller = module.get<TvseriesController>(TvseriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
