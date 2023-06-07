import { Injectable } from '@nestjs/common';
import { CreateCompetenceDto } from './dto/create-competence.dto';
import { UpdateCompetenceDto } from './dto/update-competence.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Competence} from "./entities/competence.entity";
import {Repository} from "typeorm";

@Injectable()
export class CompetencesService {
  constructor(@InjectRepository(Competence) private readonly competencesRepository: Repository<Competence>) {
  }

  create(createCompetenceDto: CreateCompetenceDto) {
    return this.competencesRepository.insert({...createCompetenceDto});
  }

  findAll() {
    return this.competencesRepository.find();
  }

  findOne(id: string) {
    return this.competencesRepository.findOneBy({ id });
  }

  update(id: string, updateCompetenceDto: UpdateCompetenceDto) {
    return `This action updates a #${id} competence`;
  }

  remove(id: string) {
    return this.competencesRepository.delete({ id });
  }
}
