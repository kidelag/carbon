import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "carbon-db",
      port: 3306,
      username: "carbon",
      password: "password",
      database: "carbon",
      autoLoadEntities: true,
      synchronize: true
    }),
    UsersModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule { }
