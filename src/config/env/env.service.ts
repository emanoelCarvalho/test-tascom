import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService {
  constructor(private readonly config: ConfigService) {}

  get getPort(): number {
    return this.config.get<number>('APP_PORT');
  }

  get getDbHost(): string {
    return this.config.get<string>('DB_HOST');
  }

  get getDbPort(): number {
    return this.config.get<number>('DB_PORT');
  }

  get getDbUsername(): string {
    return this.config.get<string>('DB_USERNAME');
  }

  get getDbPassword(): string {
    return this.config.get<string>('DB_PASSWORD');
  }

  get getDbName(): string {
    return this.config.get<string>('DB_DATABASE');
  }

  get getJwtSecret(): string {
    return this.config.get<string>('JWT_SECRET');
  }

  get getSaltRounds(): number {
    return this.config.get<number>('BCRYPT_SALT');
  }

  get getDbUrl(): string {
    return this.config.get<string>('DATABASE_URL');
  }

  get getLogHost(): string {
    return this.config.get<string>('LOGGING_HOST');
  }
}