import {User} from "../../users/users.entity";
import {IsDefined, IsString, MaxLength} from "class-validator";
import {Type} from "class-transformer";

export class CreateMissionDto {
    @IsDefined()
    public user: User;

    @IsDefined()
    @IsString()
    @MaxLength(255)
    public title: string;

    @IsDefined()
    @IsString()
    public description: string;

    @IsDefined()
    @IsString()
    @MaxLength(255)
    public company: string;

    @IsDefined()
    @IsString()
    public clientReview: string;

    @IsDefined()
    @Type(() => Date)
    public startDate: Date;

    @Type(() => Date)
    public endDate: Date;
}
