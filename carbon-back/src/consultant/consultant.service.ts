import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateConsultantDto } from "./dto/create-consultant.dto";
import { UpdateConsultantDto } from "./dto/update-consultant.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Consultant } from "./entities/consultant.entity";
import {Competence} from "../competences/entities/competence.entity";
import {Event} from "../events/entities/event.entity";
import { get } from "http";
import {Badge} from "../badge/entities/badge.entity";
import { ConsultantBadge } from "src/consultant-badge/entities/consultant-badge.entity";

@Injectable()
export class ConsultantService {
  public constructor(
    @InjectRepository(Consultant)
    private readonly consultantRepository: Repository<Consultant>,
    @InjectRepository(Badge)
    private readonly badgeRepository: Repository<Badge>,
    @InjectRepository(ConsultantBadge)
    private readonly consultantBadgeRepository: Repository<ConsultantBadge>
  ) {}

  create(createConsultantDto: CreateConsultantDto) {
    const consultant = this.consultantRepository.create(createConsultantDto)
    if (createConsultantDto.wantedCompetences)
      consultant.wantedCompetences = createConsultantDto.wantedCompetences.map(id => ({id} as unknown as Competence));
    if (createConsultantDto.events)
      consultant.events = createConsultantDto.events.map(id => ({id} as unknown as Event))
    if (createConsultantDto.badges)
      consultant.consultantBadges = createConsultantDto.badges.map(badge => ({ badge } as unknown as ConsultantBadge));
    }

  findAll() {
    return this.consultantRepository.find();
  }

  async findAllWithUser() {
    const consultants = await this.consultantRepository
      .createQueryBuilder("consultant")
      .leftJoinAndSelect("consultant.user", "user")
      .select(["consultant", "user.id", "user.firstname", "user.lastname", "user.role"])
      .getMany();

    return consultants.map((item) => ({
      ...item,
      skills: JSON.parse(item.skills),
    }));
  }

  findOne(id: string) {
    return this.consultantRepository.findOneBy({ id });
  }

  findOneByUser(userId: string) {
    return this.consultantRepository
      .createQueryBuilder("consultant")
      .where("consultant.user.id = :userId", { userId })
      .getOne();
  }

  update(id: string, updateConsultantDto: UpdateConsultantDto) {
    return `This action updates a #${id} consultant`;
  }

  remove(id: string) {
    return this.consultantRepository.delete({ id });
  }

  getEventsByConsultantId(id: string) {
    return this.consultantRepository
      .createQueryBuilder("consultant")
      .leftJoinAndSelect("consultant.events", "events")
      .where("consultant.id = :id", { id })
      .getOne();
  }

  // addBadgeToConsultant(consultantId: string, badgeId: string) {
  //   console.log(badgeId);
  //   const date = new Date();
  //   return this.consultantRepository
  //     .createQueryBuilder("consultant")
  //     .relation("badges")
  //     .of(consultantId)
  //     .add(badgeId);
  // }

    async addBadgeToConsultant(consultantId: string, badgeId: string){
      const consultant: Consultant = await this.consultantRepository.findOne({
        where: { id: consultantId },
      });
      if (!consultant) {
        throw new NotFoundException('Consultant not found');
      }
  
      const badge: Badge = await this.badgeRepository.findOne({
        where: { id: badgeId },
      });
      if (!badge) {
        throw new NotFoundException('Badge not found');
      }
  
      const consultantBadge: ConsultantBadge = new ConsultantBadge();
      consultantBadge.date = new Date();
      consultantBadge.consultant = consultant;
      consultantBadge.badge = badge;
  
      await this.consultantBadgeRepository.save(consultantBadge);
    }

  }
