import {User} from "../../users/entities/users.entity";
import {IsDefined, IsNumber, Max, Min} from "class-validator";
import {Type} from "class-transformer";
import {Competence} from "../../competences/entities/competence.entity";

export type EventType = 'formation' | 'challenge';

export class CreateEventDto {
  @IsDefined()
  public title: string;

  @IsDefined()
  public description: string;

  // @IsDefined()
  public user: User;

  @IsDefined()
  @Type(() => Date)
  public startDate: Date;

  @IsDefined()
  @Type(() => Date)
  public endDate: Date;

  @IsDefined()
  public open: boolean;

  // @IsDefined()
  public competences: Competence[];

  @IsDefined()
  @Min(1)
  @Max(5)
  public difficulty: number;

  @IsDefined()
  public nbBonusPoint: number;

  @IsDefined()
  public type: EventType;
}
