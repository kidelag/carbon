import { Role } from "../authentication/authentication.enum";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({
    nullable: false,
    type: "varchar",
    length: 50,
    unique: true
  })
  public email: string;

  @Column({
    nullable: false,
    type: "char",
    length: 60
  })
  public password: string;

  @Column({
    nullable: false,
    type: "enum",
    enum: Role,
  })
  public role: Role;
}
