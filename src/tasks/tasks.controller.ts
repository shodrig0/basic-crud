import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { CreateTaskDTO } from './DTO/create-task.dto';
import { UpdateTaskDTO } from './DTO/update-task.dto';

@Controller('/tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks() { // change any
        // console.log(query)
        return this.tasksService.getTasks()
    }

    @Get('/:id')
    getTask(@Param('id') id: string) {
        return this.tasksService.getTask(Number(id))
    }

    @Post()
    createTasks(@Body() task: CreateTaskDTO) {
        return this.tasksService.createTasks(task)
    }

    @Put()
    updateTasks(@Body() task: UpdateTaskDTO) {
        return this.tasksService.updateTasks(task)
    }

    @Patch()
    updateTasksStatus() {
        return this.tasksService.updateTasksStatus()
    }

    @Delete()
    deleteTasks() {
        return this.tasksService.deleteTasks()
    }
}
