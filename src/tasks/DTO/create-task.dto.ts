// Data Transfer Object

import { IsBoolean, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateTaskDTO {
    id: number

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    title: string

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    description: string

    @IsBoolean()
    @IsNotEmpty()
    status: boolean
}