import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EnvModule } from 'src/env/env.module';
import { EnvService } from 'src/env/env.service';

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
            }), 
            inject: [EnvService],
        })
    ]
})
export class DatabaseModule {}
