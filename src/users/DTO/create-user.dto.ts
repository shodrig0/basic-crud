import { IsEmail, IsString, MinLength, IsNotEmpty } from "class-validator"

export class CreateUserDTO {

    @IsEmail()
    email: string

    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    user: string


    password: string
    age: number
    rol: string
}