import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/entities/users.entity";
import {Competence} from "../../competences/entities/competence.entity";
import {Recruitment} from "../../recruitment/entities/recruitment.entity";

@Entity()
export class Entreprise {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @OneToOne(() => User)
    @JoinColumn()
    public user: User;

    @Column({
        nullable: false,
        type: "char",
        length: 255,
    })
    public name: string;

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

    @OneToMany(() => Recruitment, (recruitment) => recruitment.entreprise, {
        eager: true
    })
    public recruitment: Recruitment[]
}
