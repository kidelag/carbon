import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Consultant} from "../../consultant/entities/consultant.entity";
import {Competence} from "../../competences/entities/competence.entity";

@Entity()
export class ConsultCompetence {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @ManyToOne(() => Consultant)
    public consultant: Consultant

    @ManyToOne(() => Competence)
    public competence: Competence;

    @Column({
        nullable: false,
        type: "int"
    })
    public note: number;
}
