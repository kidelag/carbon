import { Module } from '@nestjs/common';
import { RecruitmentService } from './recruitment.service';
import { RecruitmentController } from './recruitment.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Consultant} from "../consultant/entities/consultant.entity";
import {Recruitment} from "./entities/recruitment.entity";
import {Entreprise} from "../entreprise/entities/entreprise.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Recruitment, Consultant, Entreprise
    ]),
  ],
  controllers: [RecruitmentController],
  providers: [RecruitmentService]
})
export class RecruitmentModule {}
