import {Role} from "../../authentication/authentication.enum";
import {IsDefined, IsEmail, IsNumber, MaxLength} from "class-validator";
import {User} from "../users.entity";
import {Type} from "class-transformer";

export class CreateUsersDto {
    @IsDefined({groups: ['user']})
    @IsEmail()
    public email: string;

    @IsDefined({groups: ['user']})
    public firstname: string;

    @IsDefined({groups: ['user']})
    public lastname: string;

    @IsDefined({groups: ['user']})
    public password: string;

    @IsDefined({groups: ['user']})
    public role: Role;

    @IsDefined({groups: ['consultant']})
    public user: User;

    @IsDefined({groups: ['consultant']})
    @IsNumber()
    public tjm: number;

    @IsDefined({groups: ['consultant']})
    @IsNumber()
    public salary: number;

    @IsDefined({groups: ['consultant']})
    public address: string;

    @IsDefined({groups: ['consultant']})
    @MaxLength(10)
    public tel: string;

    @IsDefined({groups: ['consultant']})
    @Type(() => Date)
    public startDate: Date;
}
