import { Controller, Get } from '@nestjs/common';

@Controller()
export class WelcomeController {
    @Get('/')
    index() {
        return 'Welcome to Basic-CRUD'
    }
}
