import { Injectable } from "@nestjs/common";
import { CreateConsultantDto } from "./dto/create-consultant.dto";
import { UpdateConsultantDto } from "./dto/update-consultant.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Consultant } from "./entities/consultant.entity";

@Injectable()
export class ConsultantService {
  public constructor(
    @InjectRepository(Consultant)
    private readonly consultantRepository: Repository<Consultant>
  ) {}

  create(createConsultantDto: CreateConsultantDto) {
    return this.consultantRepository.insert({ ...createConsultantDto });
  }

  findAll() {
    return this.consultantRepository.find();
  }

  async findAllWithUser() {
    const consultants = await this.consultantRepository
      .createQueryBuilder("consultant")
      .leftJoinAndSelect("consultant.user", "user")
      .select(["consultant", "user.firstname", "user.lastname", "user.role"])
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
}
