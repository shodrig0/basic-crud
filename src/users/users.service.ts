import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './DTO/create-user.dto';
import { UpdateUserDTO } from './DTO/update-user.dto';

@Injectable()
export class UsersService {

    private users: CreateUserDTO[] = []

    getUsers() {
        return this.users
    }

    getUser(id: number) {
        const userFounded = this.users.find((user) => user.id === id)
        if (!userFounded) {
            return new NotFoundException(`The user with id ${id} was not found`)
        }
        return userFounded
    }

    createUsers(user: CreateUserDTO) {
        this.users.push({
            ...user,
            id: this.users.length + 1
        })
        return user
    }

    updateUsers(user: UpdateUserDTO) {
        return "..."
    }
}
