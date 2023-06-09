import { Module } from '@nestjs/common';
import { ConsultCompetenceService } from './consult-competence.service';
import { ConsultCompetenceController } from './consult-competence.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Competence} from "../competences/entities/competence.entity";
import {Event} from "../events/entities/event.entity";
import {ConsultCompetence} from "./entities/consult-competence.entity";
import {Consultant} from "../consultant/entities/consultant.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ConsultCompetence, Consultant, Competence
    ]),
  ],
  controllers: [ConsultCompetenceController],
  providers: [ConsultCompetenceService]
})
export class ConsultCompetenceModule {}
