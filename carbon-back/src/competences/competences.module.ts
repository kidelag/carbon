import { Module } from '@nestjs/common';
import { CompetencesService } from './competences.service';
import { CompetencesController } from './competences.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Competence} from "./entities/competence.entity";
import {Event} from "../events/entities/event.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Competence, Event
    ]),
  ],
  controllers: [CompetencesController],
  providers: [CompetencesService]
})
export class CompetencesModule {}
