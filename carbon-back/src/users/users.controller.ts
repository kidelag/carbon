import { Controller, Get, HttpCode } from "@nestjs/common";
import { Role } from "src/authentication/authentication.enum";
import { AuthenticationRequired, HasRole } from "../authentication/authentication.decorator";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  public constructor(private readonly usersService: UsersService) { }

  @AuthenticationRequired()
  @HasRole(Role.ADMINISTRATOR)
  @Get()
  @HttpCode(200)
  public getUsers() {
    return this.usersService.getUsers();
  }
}
