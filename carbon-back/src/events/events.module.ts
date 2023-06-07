import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Event} from "./entities/event.entity";
import {Competence} from "../competences/entities/competence.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Event, Competence
    ]),
  ],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [EventsService]
})
export class EventsModule {}
