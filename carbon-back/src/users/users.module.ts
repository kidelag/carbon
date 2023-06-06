import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { User } from './users.entity';
import { UsersService } from './users.service';
import {ConsultantService} from "../consultant/consultant.service";
import {ConsultantModule} from "../consultant/consultant.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User
    ]),
    ConsultantModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [
    UsersService
  ]
})
export class UsersModule { }
