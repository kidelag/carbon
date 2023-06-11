import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Badge } from "../../badge/entities/badge.entity";
import { Consultant } from "../../consultant/entities/consultant.entity";

@Entity()
export class ConsultantBadge {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ type: "date" })
  public date: Date;

  @ManyToOne(() => Consultant, (consultant) => consultant.consultantBadges, {
    onDelete: "CASCADE",
  })
  public consultant: Consultant;

  @ManyToOne(() => Badge, (badge) => badge.consultantBadges, {
    onDelete: "CASCADE",
    eager: true,
  })
  public badge: Badge;
}
