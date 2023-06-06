import {User} from "../../users/users.entity";
import {IsDefined, IsNumber, MaxLength} from "class-validator";
import {Type} from "class-transformer";

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
    public address: string;

    @IsDefined()
    @MaxLength(10)
    public tel: string;

    @IsDefined()
    @Type(() => Date)
    public startDate: Date;
}
