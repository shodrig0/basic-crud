import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateTaskDTO } from './DTO/create-task.dto'
import { UpdateTaskDTO } from './DTO/update-task.dto'

@Injectable()
export class TasksService {

    private tasks: CreateTaskDTO[] = []

    getTasks() {
        return this.tasks
    }

    getTask(id: number) {
        const taskFounded = this.tasks.find((task) => task.id === id)
        if (!taskFounded) {
            return new NotFoundException(`Task with ${id} was not found`)
        }
        return taskFounded
    }

    createTasks(task: CreateTaskDTO) {
        console.log(task)
        this.tasks.push({
            ...task, // copy
            id: this.tasks.length + 1
        })
        return task
    }

    updateTasks(task: UpdateTaskDTO) {
        return "Editing tasks..."
    }

    updateTasksStatus() {
        return "Editing status..."
    }

    deleteTasks() {
        return "Deleting tasks..."
    }
}
