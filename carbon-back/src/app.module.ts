import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';
import {ConsultantModule} from "./consultant/consultant.module";
import { MissionsModule } from './missions/missions.module';
import { EventsModule } from './events/events.module';
import { CompetencesModule } from './competences/competences.module';
import { EntrepriseModule } from './entreprise/entreprise.module';
import { NewsModule } from './news/news.module';

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
    ConsultantModule,
    MissionsModule,
    EventsModule,
    CompetencesModule,
    EntrepriseModule,
    NewsModule,
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule { }
