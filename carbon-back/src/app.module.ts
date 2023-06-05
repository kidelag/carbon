import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { SeedService } from "./seed/seed.service";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "postgresql",
      port: 5432,
      username: "user",
      password: "password",
      database: "database",
      autoLoadEntities: true,
      synchronize: false
    }),
    UsersModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [SeedService],
  exports: [SeedService]
})
export class AppModule { }
