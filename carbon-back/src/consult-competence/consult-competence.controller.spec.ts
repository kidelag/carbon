import { Test, TestingModule } from '@nestjs/testing';
import { ConsultCompetenceController } from './consult-competence.controller';
import { ConsultCompetenceService } from './consult-competence.service';

describe('ConsultCompetenceController', () => {
  let controller: ConsultCompetenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsultCompetenceController],
      providers: [ConsultCompetenceService],
    }).compile();

    controller = module.get<ConsultCompetenceController>(ConsultCompetenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
