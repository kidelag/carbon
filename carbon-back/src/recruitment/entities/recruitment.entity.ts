import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Consultant} from "../../consultant/entities/consultant.entity";
import {Entreprise} from "../../entreprise/entities/entreprise.entity";

@Entity()
export class Recruitment {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @ManyToOne(() => Consultant)
    public consultant: Consultant

    @ManyToOne(() => Entreprise)
    public entreprise: Entreprise;

    @Column({
        nullable: false,
        type: "char",
        length: 255
    })
    public status: string;
}
