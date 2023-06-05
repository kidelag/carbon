import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { LoginRequest } from "./authentication.request";
import { compare } from "bcryptjs";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthenticationService {
  public constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  public async login(loginRequest: LoginRequest) {
    const user = await this.usersService.getUserByEmail(loginRequest.email);

    if (!user) {
      throw new BadRequestException("Invalid email or password");
    }

    const isValidPassword = await compare(loginRequest.password, user.password);

    if (!isValidPassword) {
      throw new BadRequestException("Invalid email or password");
    }

    const payload = {
      id: user.id
    };

    const token = this.jwtService.sign(payload);

    return token;
  }
}
