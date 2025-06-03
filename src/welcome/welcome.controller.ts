import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class WelcomeController {
    @Get('/')
    index(@Req() request: Request, @Res() response: Response) {
        response.status(200).send('Welcome to a Basic Crud in Nestjs') // or .json({})
        console.log(request.url)
    }
}
