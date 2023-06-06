import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/users.entity";

@Entity()
export class Mission {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @OneToOne(() => User)
    @JoinColumn()
    public user: User

    @Column({
        nullable: false,
        type: "char",
        length: 255
    })
    public title: string;

    @Column({
        nullable: false,
        type: "text"
    })
    public description: string;

    @Column({
        nullable: false,
        type: "char",
        length: 255
    })
    public company: string;

    @Column({
        nullable: true,
        type: "text"
    })
    public clientReview: string;

    @Column({
        nullable: false,
        type: "datetime"
    })
    public startDate: Date;

    @Column({
        nullable: true,
        type: "datetime"
    })
    public endDate: Date;
}
