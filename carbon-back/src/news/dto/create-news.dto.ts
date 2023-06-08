import {User} from "../../users/entities/users.entity";
import {IsDefined, MaxLength} from "class-validator";
import {Type} from "class-transformer";

export class CreateNewsDto {
    @IsDefined()
    @MaxLength(255)
    public title: string;

    @IsDefined()
    public content: string;

    @IsDefined()
    @Type(() => Date)
    public publishedDate: Date

    @IsDefined()
    public user: User
}
