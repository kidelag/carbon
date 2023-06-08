import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Event} from "../../events/entities/event.entity";

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
}
