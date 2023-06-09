import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsultCompetenceService } from './consult-competence.service';
import { CreateConsultCompetenceDto } from './dto/create-consult-competence.dto';
import { UpdateConsultCompetenceDto } from './dto/update-consult-competence.dto';

@Controller('consult-competence')
export class ConsultCompetenceController {
  constructor(private readonly consultCompetenceService: ConsultCompetenceService) {}

  @Post()
  create(@Body() createConsultCompetenceDto: CreateConsultCompetenceDto) {
    return this.consultCompetenceService.create(createConsultCompetenceDto);
  }

  @Get()
  findAll() {
    return this.consultCompetenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consultCompetenceService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsultCompetenceDto: UpdateConsultCompetenceDto) {
    return this.consultCompetenceService.update(id, updateConsultCompetenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consultCompetenceService.remove(id);
  }
}
