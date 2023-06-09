import { PartialType } from '@nestjs/mapped-types';
import { CreateConsultCompetenceDto } from './create-consult-competence.dto';

export class UpdateConsultCompetenceDto extends PartialType(CreateConsultCompetenceDto) {}
