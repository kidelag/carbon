import {BadRequestException, Body, Controller, Get, HttpCode, Post} from "@nestjs/common";
import { Role } from "src/authentication/authentication.enum";
import { AuthenticationRequired, HasRole } from "../authentication/authentication.decorator";
import { UsersService } from "./users.service";
import {CreateUsersDto} from "./dto/create-users.dto";
import {hash} from "bcryptjs";

@Controller("users")
export class UsersController {
  public constructor(private readonly usersService: UsersService) { }

  @AuthenticationRequired()
  @Get()
  @HttpCode(200)
  public getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  public async createUser(@Body() createUsersDto: CreateUsersDto) {
    if (await this.usersService.getUserByEmail(createUsersDto.email)) {
      throw new BadRequestException('User already exists')
    }
    createUsersDto.password = await hash(createUsersDto.password, 10)
    return this.usersService.createUser(createUsersDto);
  }
}
