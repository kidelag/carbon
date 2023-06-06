import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "src/users/users.module";
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationService } from "./authentication.service";
import { ConsultantModule } from "src/consultant/consultant.module";

@Module({
  imports: [
    UsersModule,
    ConsultantModule,
    JwtModule.register({
      global: true,
      secret:
        "I SWEAR TO GOD IF I SEE THIS IN A REAL PROJECT I WILL KILL YOU DO YOU UNDERSTAND???",
      signOptions: {
        expiresIn: "1d",
      },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
