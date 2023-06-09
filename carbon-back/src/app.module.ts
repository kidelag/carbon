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
import { ConsultCompetenceModule } from './consult-competence/consult-competence.module';
import { RecruitmentModule } from './recruitment/recruitment.module';
import { BadgeModule } from './badge/badge.module';
import { ConsultantBadgeModule } from './consultant-badge/consultant-badge.module';

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
    ConsultCompetenceModule,
    RecruitmentModule,
    BadgeModule,
    ConsultantBadgeModule,
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule { }
