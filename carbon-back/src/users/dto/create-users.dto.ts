import {Role} from "../../authentication/authentication.enum";
import {IsDefined, IsEmail} from "class-validator";

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

    @IsDefined()
    public role: Role;
}
