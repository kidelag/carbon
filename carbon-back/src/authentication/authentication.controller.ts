import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { LoginRequest, TokenValidateRequest } from "./authentication.request";
import { AuthenticationService } from "./authentication.service";

@Controller("auth")
export class AuthenticationController {
  public constructor(
    private readonly authenticationService: AuthenticationService
  ) {}

  @Post("login")
  public login(@Body(ValidationPipe) loginRequest: LoginRequest) {
    return this.authenticationService.login(loginRequest);
  }

  @Post("validateToken")
  public validateToken(
    @Body(ValidationPipe) tokenValidateRequest: TokenValidateRequest
  ) {
    return this.authenticationService.validateToken(tokenValidateRequest);
  }
}
