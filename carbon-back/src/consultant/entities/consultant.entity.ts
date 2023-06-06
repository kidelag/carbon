import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/users.entity";

@Entity()
export class Consultant {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User

    @Column({
        nullable: false,
        type: "int",
    })
    public tjm: number;

    @Column({
        nullable: false,
        type: "int",
    })
    public salary: number;

    @Column({
        nullable: false,
        type: "datetime",
    })
    public startDate: Date;
}
