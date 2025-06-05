import { IsEmail, IsString, MinLength, IsNotEmpty, IsNumber, Max } from "class-validator"

export class CreateUserDTO {

    id: number

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    username: string

    @IsString()
    @MinLength(12)
    @IsNotEmpty()
    password: string

    @IsNumber()
    @Max(99)
    @IsNotEmpty()
    age: number

    @IsString()
    @IsNotEmpty()
    rol: string
}