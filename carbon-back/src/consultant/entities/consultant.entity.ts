import {
  Column,
  Entity,
  JoinColumn, JoinTable, ManyToMany, OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../../users/entities/users.entity";
import {Competence} from "../../competences/entities/competence.entity";
import {Mission} from "../../missions/entities/mission.entity";
import {ConsultCompetence} from "../../consult-competence/entities/consult-competence.entity";
import {Event} from "../../events/entities/event.entity";
import {Recruitment} from "../../recruitment/entities/recruitment.entity";
import { ConsultantBadge } from "src/consultant-badge/entities/consultant-badge.entity";

@Entity()
export class Consultant {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column({
    nullable: false,
    type: "int",
  })
  public tjm: number;

  @Column({
    nullable: false,
    type: "int",
  })
  public salary: number;

  @Column({
    nullable: false,
    type: "text",
  })
  public address: string;

  @Column({
    nullable: false,
    type: "char",
    length: 255,
  })
  public tel: string;

  @Column({
    nullable: false,
    type: "datetime",
  })
  public startDate: Date;

  @Column({
    nullable: false,
    type: "char",
    length: 255,
  })
  public position: string = "junior";

  @Column({
    nullable: true,
    type: "text",
  })
  public skills: string;

  @Column({
    nullable: false,
    type: "char",
    length: 255,
  })
  public job: string;

  @Column({
    nullable: false,
    type: "text"
  })
  public description: string;

  @ManyToMany(() => Competence, {
    eager: true
  })
  @JoinTable()
  public wantedCompetences: Competence[]

  @OneToMany(() => Mission, (mission) => mission.consultant, {
    eager: true
  })
  public missions: Mission[]

  @OneToMany(() => ConsultCompetence, (consultant) => consultant.consultant, {
    eager: true
  })
  public consulCompetence: ConsultCompetence[]

  @ManyToMany(() => Event, {
    eager: true
  })
  @JoinTable()
  public events: Event[];

  @OneToMany(() => Recruitment, (recruitment) => recruitment.consultant, {
    eager: true
  })
  public recruitment: Recruitment[]


  @OneToMany(() => ConsultantBadge, (consultantBadge) => consultantBadge.consultant, {
    eager: true
    })
  public consultantBadges: ConsultantBadge[];
}
