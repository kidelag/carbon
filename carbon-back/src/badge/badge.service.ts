import { Injectable } from '@nestjs/common';
import { CreateBadgeDto } from './dto/create-badge.dto';
import { UpdateBadgeDto } from './dto/update-badge.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Badge} from "./entities/badge.entity";
import {Repository} from "typeorm";

@Injectable()
export class BadgeService {
  constructor(@InjectRepository(Badge) private readonly badgeRepository: Repository<Badge>) {
  }
  create(createBadgeDto: CreateBadgeDto) {
    return this.badgeRepository.insert({...createBadgeDto});
  }

  findAll() {
    return this.badgeRepository.find();
  }

  findOne(id: string) {
    return this.badgeRepository.findOneBy({ id });
  }

  update(id: string, updateBadgeDto: UpdateBadgeDto) {
    return `This action updates a #${id} badge`;
  }

  remove(id: string) {
    return this.badgeRepository.delete({ id });
  }
}
