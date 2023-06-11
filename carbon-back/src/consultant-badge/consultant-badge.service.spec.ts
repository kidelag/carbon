import { Test, TestingModule } from '@nestjs/testing';
import { ConsultantBadgeService } from './consultant-badge.service';

describe('ConsultantBadgeService', () => {
  let service: ConsultantBadgeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultantBadgeService],
    }).compile();

    service = module.get<ConsultantBadgeService>(ConsultantBadgeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
