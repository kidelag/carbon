import { User } from "../../users/entities/users.entity";
import { IsDefined, IsNumber, MaxLength } from "class-validator";
import { Type } from "class-transformer";

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
  public position: string = "junior";

  public skills: string = "[]";
}
