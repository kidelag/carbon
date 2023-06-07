import {Column, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/entities/users.entity";
import {Competence} from "../../competences/entities/competence.entity";

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

    @ManyToMany(() => Competence, {
        eager: true
    })
    @JoinTable()
    public competences: Competence[]
}
