import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { LoginRequest, TokenValidateRequest } from "./authentication.request";
import { compare } from "bcryptjs";
import { JwtService } from "@nestjs/jwt";
import { JsonWebTokenError } from "jsonwebtoken";
import { Reflector } from "@nestjs/core";

@Injectable()
export class AuthenticationService {
  public constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

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
      id: user.id,
    };

    const token = this.jwtService.sign(payload);

    return token;
  }

  public async validateToken(tokenValidateRequest: TokenValidateRequest) {
    if (!tokenValidateRequest.token) {
      throw new BadRequestException("Token is missing");
    }

    try {
      const { id } = this.jwtService.verify(tokenValidateRequest.token);
      const user = await this.usersService.getUserById(id);

      console.log(user);

      if (!user) {
        throw new BadRequestException("Invalid user");
      }

      return JSON.stringify({
        isConnected: true,
      });
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        throw new BadRequestException("Invalid token");
      }

      throw error;
    }
  }
}
