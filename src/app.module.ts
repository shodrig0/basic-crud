import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { WelcomeController } from './welcome/welcome.controller';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule],
  controllers: [WelcomeController],
})
export class AppModule { }
