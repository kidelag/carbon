import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { LoginRequest, TokenValidateRequest } from "./authentication.request";
import { compare } from "bcryptjs";
import { JwtService } from "@nestjs/jwt";
import { JsonWebTokenError } from "jsonwebtoken";
import { Reflector } from "@nestjs/core";
import { ConsultantService } from "src/consultant/consultant.service";

@Injectable()
export class AuthenticationService {
  public constructor(
    private readonly usersService: UsersService,
    private readonly consultantsService: ConsultantService,
    private readonly jwtService: JwtService
  ) {}

  public async login(loginRequest: LoginRequest) {
    const user = await this.usersService.getUserByEmail(loginRequest.email);
    const detail = await this.consultantsService.findOneByUser(user.id);

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

    const userInfo = detail
      ? {
          salary: detail.salary,
          tjm: detail.tjm,
          tel: detail.tel,
          address: detail.address,
        }
      : {};

    return {
      isConnected: true,
      token,
      id: user.id,
      role: user.role,
      userInfo: {
        email: user.email,
        prenom: user.firstname,
        nom: user.lastname,
        ...userInfo,
      },
    };
  }

  public async validateToken(tokenValidateRequest: TokenValidateRequest) {
    if (!tokenValidateRequest.token) {
      throw new BadRequestException("Token is missing");
    }

    try {
      const { id } = this.jwtService.verify(tokenValidateRequest.token);
      const user = await this.usersService.getUserById(id);
      const detail = await this.consultantsService.findOneByUser(id);

      console.log(user);

      if (!user) {
        throw new BadRequestException("Invalid user");
      }

      const userInfo = detail
        ? {
            salary: detail.salary,
            tjm: detail.tjm,
            tel: detail.tel,
            address: detail.address,
          }
        : {};

      return {
        isConnected: true,
        id: user.id,
        role: user.role,
        isAdmin: user.role === "SUPPORT",
        userInfo: {
          email: user.email,
          prenom: user.firstname,
          nom: user.lastname,
          ...userInfo,
        },
      };
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        throw new BadRequestException("Invalid token");
      }

      throw error;
    }
  }
}
