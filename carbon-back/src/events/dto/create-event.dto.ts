import {User} from "../../users/users.entity";
import {IsDefined} from "class-validator";
import {Type} from "class-transformer";

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
}
