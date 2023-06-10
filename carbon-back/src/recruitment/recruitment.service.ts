import { Injectable } from '@nestjs/common';
import { CreateRecruitmentDto } from './dto/create-recruitment.dto';
import { UpdateRecruitmentDto } from './dto/update-recruitment.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Recruitment} from "./entities/recruitment.entity";
import {Repository} from "typeorm";

@Injectable()
export class RecruitmentService {
  constructor(@InjectRepository(Recruitment) private readonly recruitmentRepository: Repository<Recruitment>) {
  }

  create(createRecruitmentDto: CreateRecruitmentDto) {
    return this.recruitmentRepository.insert({...createRecruitmentDto});
  }

  findAll() {
    return this.recruitmentRepository.find();
  }

  findOne(id: string) {
    return this.recruitmentRepository.findOneBy({ id });
  }

  update(id: string, updateRecruitmentDto: UpdateRecruitmentDto) {
    return `This action updates a #${id} recruitment`;
  }

  remove(id: string) {
    return this.recruitmentRepository.delete({ id });
  }
}
