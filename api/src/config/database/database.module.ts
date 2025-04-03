import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EnvModule } from 'src/config/env/env.module';
import { EnvService } from 'src/config/env/env.service';
import { Tag } from 'src/tags/tag.model';
import { Task } from 'src/tasks/task.model';
import { User } from 'src/users/user.model';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [EnvModule],
      useFactory: (configService: EnvService) => ({
        dialect: 'postgres',
        host: configService.getDbHost,
        port: configService.getDbPort,
        username: configService.getDbUsername,
        password: configService.getDbPassword,
        database: configService.getDbName,
        models: [User, Task, Tag],
        logging: false,
        autoLoadModels: true,
        synchronize: true,
      }),
      inject: [EnvService],
    }),
  ],
})
export class DatabaseModule {}
