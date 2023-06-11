import { User } from "../../users/entities/users.entity";
import { IsDefined, IsNumber, MaxLength } from "class-validator";
import { Type } from "class-transformer";
import {Competence} from "../../competences/entities/competence.entity";
import {Event} from "../../events/entities/event.entity";
import {Badge} from "../../badge/entities/badge.entity";
import { ConsultantBadge } from "src/consultant-badge/entities/consultant-badge.entity";

export class CreateConsultantDto {
  @IsDefined()
  public user: User;

  @IsDefined()
  @IsNumber()
  public tjm: number = 0;

  @IsDefined()
  @IsNumber()
  public salary: number = 0;

  @IsDefined()
  public address: string;

  @IsDefined()
  @MaxLength(10)
  public tel: string;

  @IsDefined()
  @Type(() => Date)
  public startDate: Date;

  @IsDefined()
  @MaxLength(255)
  public job: string;

  @MaxLength(30)
  public position: string;

  @IsDefined()
  public description: string;

  public wantedCompetences: Competence[];

  public events: Event[];

  public badges: ConsultantBadge[];
}
