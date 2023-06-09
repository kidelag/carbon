import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../../users/entities/users.entity";

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
  public position: string;

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

}
