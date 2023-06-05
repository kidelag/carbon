import { UsersService } from "src/users/users.service";
import { LoginRequest } from "./authentication.request";
import { JwtService } from "@nestjs/jwt";
export declare class AuthenticationService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    login(loginRequest: LoginRequest): Promise<string>;
}
