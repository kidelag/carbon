import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Event} from "./entities/event.entity";
import {Competence} from "../competences/entities/competence.entity";

@Injectable()
export class EventsService {
  constructor(@InjectRepository(Event) private readonly eventsRepository: Repository<Event>) {
  }

  create(createEventDto: CreateEventDto) {
    const event = this.eventsRepository.create(createEventDto);
    
    //if (createEventDto.competences) is not null, then map each id to a Competence object
    if (createEventDto.competences)
     event.competences = createEventDto.competences.map(id => ({id} as unknown as Competence));
     
    return this.eventsRepository.save(event);
  }

  findAll() {
    return this.eventsRepository.find();
  }

  findOne(id: string) {
    return this.eventsRepository.findOneBy({ id });
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: string) {
    return this.eventsRepository.delete({ id });
  }
}
