import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from "@nestjs/common";
import { ConsultantService } from "./consultant.service";
import { CreateConsultantDto } from "./dto/create-consultant.dto";
import { UpdateConsultantDto } from "./dto/update-consultant.dto";

@Controller("consultant")
export class ConsultantController {
  constructor(private readonly consultantService: ConsultantService) {}

  @Post()
  create(@Body(ValidationPipe) createConsultantDto: CreateConsultantDto) {
    return this.consultantService.create(createConsultantDto);
  }

  @Get()
  findAll() {
    return this.consultantService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.consultantService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateConsultantDto: UpdateConsultantDto
  ) {
    return this.consultantService.update(id, updateConsultantDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.consultantService.remove(id);
  }

  @Post("fetchAllConsultant")
  fetchAllConsultant() {
    return this.consultantService.findAllWithUser();
  }

  @Get(":id/events")
  getEventsByConsultantId(@Param("id") id: string) {
    return this.consultantService.getEventsByConsultantId(id);
  }

  @Post(":id/badge")
  addBadgeToConsultant(@Param("id") id: string, @Body("badgeId") badgeId: string) {
    return this.consultantService.addBadgeToConsultant(id, badgeId);
  }

  @Post(":id/event/:eventId")
  addEventToConsultant(
    @Param("id") id: string,
    @Param("eventId") eventId: string
  ) {
    return this.consultantService.addEventToConsultant(id, eventId);
  }

  @Get("/user/:userId")
  getConsultantByUserId(@Param("userId") userId: string) {
    return this.consultantService.getConsultantByUserId(userId);
  }

}
