import { Module } from "@nestjs/common";
import { ConsultantService } from "./consultant.service";
import { ConsultantController } from "./consultant.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Consultant } from "./entities/consultant.entity";
import { User } from "src/users/entities/users.entity";
import { BadgeService } from "src/badge/badge.service";
import { ConsultantBadgeService } from "src/consultant-badge/consultant-badge.service";
import { Badge } from "src/badge/entities/badge.entity";
import { ConsultantBadge } from "src/consultant-badge/entities/consultant-badge.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Consultant, User,Badge, ConsultantBadge])],
  controllers: [ConsultantController],
  providers: [ConsultantService],
  exports: [ConsultantService],
})
export class ConsultantModule {}
