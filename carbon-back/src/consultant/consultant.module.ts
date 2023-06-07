import { Module } from "@nestjs/common";
import { ConsultantService } from "./consultant.service";
import { ConsultantController } from "./consultant.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Consultant } from "./entities/consultant.entity";
import { User } from "src/users/entities/users.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Consultant, User])],
  controllers: [ConsultantController],
  providers: [ConsultantService],
  exports: [ConsultantService],
})
export class ConsultantModule {}
