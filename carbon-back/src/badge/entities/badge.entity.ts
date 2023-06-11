import { ConsultantBadge } from "src/consultant-badge/entities/consultant-badge.entity";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Badge {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({
        nullable: false,
        type: "char",
        length: 255,
    })
    public title: string;

    @OneToMany(() => ConsultantBadge, (consultantBadge) => consultantBadge.badge)
    public consultantBadges: ConsultantBadge[];
}
