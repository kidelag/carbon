import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Event} from "../../events/entities/event.entity";
import {Entreprise} from "../../entreprise/entities/entreprise.entity";
import {ConsultCompetence} from "../../consult-competence/entities/consult-competence.entity";

@Entity()
export class Competence {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({
        nullable: false,
        type: "char",
        length: 255,
    })
    public title: string;

    @ManyToMany(() => Event, event => event.competences)
    public events: Event[];

    @ManyToMany(() => Entreprise, entreprise => entreprise.wantedCompetences)
    public entreprises: Entreprise[];

    @OneToMany(() => ConsultCompetence, (competence) => competence.competence)
    public consultCompetence: ConsultCompetence[];
}
