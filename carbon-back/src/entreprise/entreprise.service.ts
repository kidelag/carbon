import { Injectable } from '@nestjs/common';
import { CreateEntrepriseDto } from './dto/create-entreprise.dto';
import { UpdateEntrepriseDto } from './dto/update-entreprise.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Entreprise} from "./entities/entreprise.entity";
import {Repository} from "typeorm";
import {Competence} from "../competences/entities/competence.entity";

@Injectable()
export class EntrepriseService {
  constructor(@InjectRepository(Entreprise) private readonly entrepriseRepository: Repository<Entreprise>) {
  }

  create(createEntrepriseDto: CreateEntrepriseDto) {
    const entreprise = this.entrepriseRepository.create(createEntrepriseDto);
    entreprise.wantedCompetences = createEntrepriseDto.wantedCompetences.map(id => ({id} as unknown as Competence));
    return this.entrepriseRepository.save(entreprise);
  }

  findAll() {
    return this.entrepriseRepository.find();
  }

  findOne(id: string) {
    return this.entrepriseRepository.findOneBy({ id });
  }

  update(id: string, updateEntrepriseDto: UpdateEntrepriseDto) {
    return `This action updates a #${id} entreprise`;
  }

  remove(id: string) {
    return this.entrepriseRepository.delete({ id });
  }
}
