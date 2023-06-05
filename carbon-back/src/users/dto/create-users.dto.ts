import {Role} from "../../authentication/authentication.enum";
import {IsDefined, IsEmail} from "class-validator";

export class CreateUsersDto {
    @IsDefined()
    @IsEmail()
    public email: string;

    @IsDefined()
    public password: string;

    public role: Role;
}
