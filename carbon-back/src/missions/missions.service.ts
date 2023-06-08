import { Injectable } from '@nestjs/common';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Mission} from "./entities/mission.entity";

@Injectable()
export class MissionsService {
  public constructor(
      @InjectRepository(Mission)
      private readonly missionRepository: Repository<Mission>
  ) {}

  create(createMissionDto: CreateMissionDto) {
    return this.missionRepository.insert({...createMissionDto});
  }

  findAll() {
    return this.missionRepository.find();
  }

  findOne(id: string) {
    return this.missionRepository.findOneBy({ id });
  }

  update(id: string, updateMissionDto: UpdateMissionDto) {
    return `This action updates a #${id} mission`;
  }

  remove(id: string) {
    return this.missionRepository.delete({ id });
  }
}
