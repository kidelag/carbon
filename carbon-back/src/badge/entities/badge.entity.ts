import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
}
