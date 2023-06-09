import {Consultant} from "../../consultant/entities/consultant.entity";
import {Competence} from "../../competences/entities/competence.entity";
import {IsDefined} from "class-validator";

export class CreateConsultCompetenceDto {
    @IsDefined()
    public consultant: Consultant;

    @IsDefined()
    public competence: Competence;

    @IsDefined()
    public note: number;
}
