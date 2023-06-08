import {User} from "../../users/entities/users.entity";
import {IsDefined} from "class-validator";
import {Type} from "class-transformer";
import {Competence} from "../../competences/entities/competence.entity";

export class CreateEventDto {
  @IsDefined()
  public title: string;

  @IsDefined()
  public description: string;

  @IsDefined()
  public user: User;

  @IsDefined()
  @Type(() => Date)
  public startDate: Date;

  @IsDefined()
  @Type(() => Date)
  public endDate: Date;

  @IsDefined()
  public open: boolean;

  @IsDefined()
  public competences: Competence[];
}
