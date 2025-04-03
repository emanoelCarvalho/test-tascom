import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { DatabaseModule } from './database/database.module';
import { EnvModule } from './env/env.module';

@Module({
  imports: [UsersModule, TasksModule, DatabaseModule, EnvModule],
})
export class AppModule {}
