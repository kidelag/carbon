import {IsDefined} from "class-validator";

export class CreateCompetenceDto {
    @IsDefined()
    public title: string;
}
