import { Injectable } from '@nestjs/common';
import { CreateConsultantDto } from './dto/create-consultant.dto';
import { UpdateConsultantDto } from './dto/update-consultant.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../users/users.entity";
import {InsertResult, Repository} from "typeorm";
import {Consultant} from "./entities/consultant.entity";

@Injectable()
export class ConsultantService {
  public constructor(@InjectRepository(Consultant) private readonly consultantRepository: Repository<Consultant>) { }

  create(createConsultantDto: CreateConsultantDto) {
    return this.consultantRepository.insert({...createConsultantDto});
  }

  findAll() {
    return this.consultantRepository.find();
  }

  findOne(id: string) {
    return this.consultantRepository.findOneBy({ id });
  }

  update(id: string, updateConsultantDto: UpdateConsultantDto) {
    return `This action updates a #${id} consultant`;
  }

  remove(id: string) {
    return this.consultantRepository.delete({ id });
  }
}
