import {BadRequestException, Body, Controller, Get, HttpCode, Logger, Post} from "@nestjs/common";
import {AuthenticationRequired} from "../authentication/authentication.decorator";
import {UsersService} from "./users.service";
import {CreateUsersDto} from "./dto/create-users.dto";
import {hash} from "bcryptjs";
import {CreateConsultantDto} from "../consultant/dto/create-consultant.dto";
import {ConsultantService} from "../consultant/consultant.service";

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
  public async createUser(@Body() body: {createUsersDto: CreateUsersDto, createConsultantDto: CreateConsultantDto}) {
    console.log(body)
    if (await this.usersService.getUserByEmail(body.createUsersDto.email)) {
      throw new BadRequestException('User already exists')
    }
    body.createUsersDto.password = await hash(body.createUsersDto.password, 10)
    const user = await this.usersService.createUser(body.createUsersDto);
    body.createConsultantDto.user = user.identifiers[0].id;
    await this.consultantService.create(body.createConsultantDto)
    return user;
  }
}
