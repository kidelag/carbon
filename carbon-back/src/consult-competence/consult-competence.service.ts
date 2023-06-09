import { Injectable } from '@nestjs/common';
import { CreateConsultCompetenceDto } from './dto/create-consult-competence.dto';
import { UpdateConsultCompetenceDto } from './dto/update-consult-competence.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {ConsultCompetence} from "./entities/consult-competence.entity";
import {Repository} from "typeorm";

@Injectable()
export class ConsultCompetenceService {
  constructor(@InjectRepository(ConsultCompetence) private readonly consultCompetenceRepository: Repository<ConsultCompetence>) {
  }

  create(createConsultCompetenceDto: CreateConsultCompetenceDto) {
    return this.consultCompetenceRepository.insert({...createConsultCompetenceDto});
  }

  findAll() {
    return this.consultCompetenceRepository.find();
  }

  findOne(id: string) {
    return this.consultCompetenceRepository.findOneBy({ id });
  }

  update(id: string, updateConsultCompetenceDto: UpdateConsultCompetenceDto) {
    return this.consultCompetenceRepository.save({id, ...updateConsultCompetenceDto})
  }

  remove(id: string) {
    return this.consultCompetenceRepository.delete({ id });
  }
}
