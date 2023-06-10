import {IsDefined} from "class-validator";
import {Consultant} from "../../consultant/entities/consultant.entity";
import {Entreprise} from "../../entreprise/entities/entreprise.entity";

export class CreateRecruitmentDto {
    @IsDefined()
    public consultant: Consultant;

    @IsDefined()
    public entreprise: Entreprise;

    @IsDefined()
    public status: string;
}
