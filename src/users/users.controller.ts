import { Controller, Delete, Patch, Get, Post, Put, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './DTO/create-user.dto';

@Controller('/users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getAllUsers() {
        return this.usersService.getUsers()
    }

    @Get('/:id')
    getUser(@Param('id') id: string) {
        return this.usersService.getUser(Number(id))
    }

    @Post()
    createUsers(@Body() user: CreateUserDTO) {
        return this.usersService.createUsers(user)
    }

    @Put()
    updateUsers() {

    }

    @Patch()
    updateUserStatus() {

    }

    @Delete()
    deleteUsers() {

    }
}
