import {IsDefined} from "class-validator";

export class CreateBadgeDto {
    @IsDefined()
    public title: string;
}
