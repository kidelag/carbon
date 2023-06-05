import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";
import { Reflector } from "@nestjs/core";
export declare class AuthenticationGuard implements CanActivate {
    private readonly jwtService;
    private readonly usersService;
    private reflector;
    constructor(jwtService: JwtService, usersService: UsersService, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
