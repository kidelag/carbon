import {BadRequestException, Body, Controller, Get, HttpCode, Post, ValidationPipe} from "@nestjs/common";
import {AuthenticationRequired} from "../authentication/authentication.decorator";
import {UsersService} from "./users.service";
import {CreateUsersDto} from "./dto/create-users.dto";
import {hash} from "bcryptjs";
import {Role} from "../authentication/authentication.enum";
import {ConsultantService} from "../consultant/consultant.service";
import {CreateConsultantDto} from "../consultant/dto/create-consultant.dto";

@Controller("users")
export class UsersController {
  public constructor(private readonly usersService: UsersService, private readonly consultantService: ConsultantService) { }

  @AuthenticationRequired()
  @Get()
  @HttpCode(200)
  public getUsers() {
    return this.usersService.getUsers();
  }

  public getUser(id: string) {
    return this.usersService.getUserById(id)
  }

  @Post()
  public async createUser(@Body(ValidationPipe) createUsersDto: CreateUsersDto) {
    if (await this.usersService.getUserByEmail(createUsersDto.email)) {
      return new BadRequestException('User already exists')
    }
    createUsersDto.password = await hash(createUsersDto.password, 10)
    return this.usersService.createUser(createUsersDto);
  }

  @AuthenticationRequired()
  @Get("consultants/totals")
  public async getConsultantsTotals() {
    return this.usersService.getConsultantsTotals()
  }
}
