import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/entities/users.entity";

@Entity()
export class News {
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
        type: "text"
    })
    public content: string;

    @Column({
        nullable: false,
        type: "datetime"
    })
    public publishedDate: Date

    @OneToOne(() => User)
    @JoinColumn()
    public user: User
}
