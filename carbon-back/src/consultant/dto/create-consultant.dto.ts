import {User} from "../../users/users.entity";
import {IsDefined, IsNumber} from "class-validator";
import {Type} from "class-transformer";
import {InsertResult} from "typeorm";

export class CreateConsultantDto {
    @IsDefined()
    public user: User;

    @IsDefined()
    @IsNumber()
    public tjm: number;

    @IsDefined()
    @IsNumber()
    public salary: number;

    @IsDefined()
    @Type(() => Date)
    public startDate: Date;
}
