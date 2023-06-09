import {User} from "../../users/entities/users.entity";
import {Competence} from "../../competences/entities/competence.entity";
import {IsDefined, MaxLength} from "class-validator";

export class CreateEntrepriseDto {
    @IsDefined()
    public user: User;

    @IsDefined()
    @MaxLength(255)
    public name: string;

    @IsDefined()
    public description: string;

    public wantedCompetences: Competence[]
}
