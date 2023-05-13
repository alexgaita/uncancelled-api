import { Test, TestingModule } from '@nestjs/testing';
import { MagicGptService } from './magic-gpt.service';

describe('MagicGptService', () => {
  let service: MagicGptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MagicGptService],
    }).compile();

    service = module.get<MagicGptService>(MagicGptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
