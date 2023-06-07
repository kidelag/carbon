import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../../users/entities/users.entity";
import { Consultant } from "../../consultant/entities/consultant.entity";

@Entity()
export class Mission {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @ManyToOne(() => Consultant)
  @JoinColumn()
  public consultant: Consultant;

  @Column({
    nullable: false,
    type: "char",
    length: 255,
  })
  public title: string;

  @Column({
    nullable: false,
    type: "text",
  })
  public description: string;

  @Column({
    nullable: false,
    type: "char",
    length: 255,
  })
  public company: string;

  @Column({
    nullable: true,
    type: "text",
  })
  public clientReview: string;

  @Column({
    nullable: false,
    type: "datetime",
  })
  public startDate: Date;

  @Column({
    nullable: true,
    type: "datetime",
  })
  public endDate: Date;
}
