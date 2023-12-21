import { IsString } from "class-validator";

export class CreateCarDTO {

    readonly id: string;

    @IsString()
    readonly brand: string;

    @IsString()
    readonly model: string;

};