import { Controller, Get, HttpCode, Param, ParseIntPipe, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';

@Controller()
export class WelcomeController {
    @Get('/')
    index(@Req() request: Request, @Res() response: Response) {
        response.status(200).send('Welcome to a Basic Crud in Nestjs') // or .json({})
        console.log(request.url)
    }

    @Get('new')
    @HttpCode(201) // decorator
    lastTaskCreated() {
        return 'New Task'
    }

    @Get('error')
    @HttpCode(500)
    errorServer() {
        return 'Error server'
    }

    @Get('notfound')
    @HttpCode(404)
    notFound() {
        return 'Page not found'
    }

    @Get('calc/:num')
    add(@Param('num', ParseIntPipe) num: number) {
        return num + 2
    }

    @Get('greet')
    greet(@Query(ValidateUserPipe) query: { name: string, age: number }) {
        console.log(query)
        return `It's ${query.name}, and my age is ${query.age} yo`
    }

}
