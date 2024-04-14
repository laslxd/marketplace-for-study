import { IsString, isString } from "class-validator";

export class CategoryDto {
    @IsString()
    name: string
}