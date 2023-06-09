import { Test, TestingModule } from '@nestjs/testing';
import { ConsultCompetenceService } from './consult-competence.service';

describe('ConsultCompetenceService', () => {
  let service: ConsultCompetenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultCompetenceService],
    }).compile();

    service = module.get<ConsultCompetenceService>(ConsultCompetenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
