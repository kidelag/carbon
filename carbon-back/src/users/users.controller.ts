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
  public async createUser(@Body(ValidationPipe) body: {createUsersDto: CreateUsersDto, createConsultantDto: CreateConsultantDto}) {
    if (await this.usersService.getUserByEmail(body.createUsersDto.email)) {
      return new BadRequestException('User already exists')
    }
    if(body.createUsersDto.role === Role.CONSULTANT && !body.createConsultantDto) {
      return new BadRequestException('Missing datas for consultant')
    }
    body.createUsersDto.password = await hash(body.createUsersDto.password, 10)
    const user = await this.usersService.createUser(body.createUsersDto);
    if (body.createUsersDto.role === Role.CONSULTANT) {
      body.createConsultantDto.user = user.identifiers[0].id;
      try {
        await this.consultantService.create(body.createConsultantDto)
      } catch (e) {
        await this.usersService.deleteUser(user.identifiers[0].id)
        throw new BadRequestException(e.sqlMessage)
      }
    }
    return user;
  }
}
