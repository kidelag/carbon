import {Column, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "../../users/entities/users.entity";
import {Competence} from "../../competences/entities/competence.entity";

export type EventType = 'formation' | 'challenge';
@Entity()
export class Event {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

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

  @OneToOne(() => User)
  public user: User;

  @Column({
      nullable: false,
      type: "datetime",
  })
  public startDate: Date;

  @Column({
      nullable: true,
      type: "datetime"
  })
  public endDate: Date;

  @Column({
      nullable: false,
      type: "boolean"
  })
  public open: boolean;

  @Column({
    nullable: false,
    type: "numeric"
  })
  public difficulty: number;

  @Column({
      nullable: false,
      default: 0,
      type: "numeric"
  })
  public nbParticipant: number;

  @Column({
      nullable: false,
      type: "numeric"
  })
  public nbBonusPoint: number;

  @Column({
    nullable: false,
    type: 'enum',
    enum: ['formation', 'challenge'],
  })
  public type: EventType;

  @ManyToMany(() => Competence, {
      eager: true
  })
  @JoinTable()
  public competences: Competence[]


  public addParticipant(): void {
    this.nbParticipant += 1;
  }
}
