import { Module } from '@nestjs/common';
import { EntrepriseService } from './entreprise.service';
import { EntrepriseController } from './entreprise.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Competence} from "../competences/entities/competence.entity";
import {Entreprise} from "./entities/entreprise.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Entreprise, Competence
    ]),
  ],
  controllers: [EntrepriseController],
  providers: [EntrepriseService],
  exports: [EntrepriseService]
})
export class EntrepriseModule {}
