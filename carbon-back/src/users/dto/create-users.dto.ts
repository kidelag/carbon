import {Role} from "../../authentication/authentication.enum";
import {IsDate, IsDateString, IsDefined, IsEmail, IsString} from "class-validator";
import {Type} from "class-transformer";

export class CreateUsersDto {
    @IsDefined()
    @IsEmail()
    public email: string;

    @IsDefined()
    public firstname: string;

    @IsDefined()
    public lastname: string;

    @IsDefined()
    public password: string;

    @IsDate()
    @Type(() => Date)
    public birthdate: Date;

    @IsDefined()
    public role: Role;
}
