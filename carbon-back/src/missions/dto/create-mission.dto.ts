import {IsDefined, IsString, MaxLength} from "class-validator";
import {Type} from "class-transformer";
import {Consultant} from "../../consultant/entities/consultant.entity";

export class CreateMissionDto {
    @IsDefined()
    public consultant: Consultant;

    @IsDefined()
    @MaxLength(255)
    public title: string;

    @IsDefined()
    public description: string;

    @IsDefined()
    @MaxLength(255)
    public company: string;

    public clientReview: string;

    public clientRating: number;

    @IsDefined()
    @Type(() => Date)
    public startDate: Date;

    @Type(() => Date)
    public endDate: Date;
}
