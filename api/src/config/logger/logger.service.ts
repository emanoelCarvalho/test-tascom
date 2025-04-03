import { Injectable, LoggerService, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import * as winston from 'winston';
import * as Transport from 'winston-transport';
import * as net from 'net';

class LogstashTransport extends Transport {
  private socket: net.Socket;

  constructor(opts?: Transport.TransportStreamOptions) {
    super(opts);
    this.socket = net.createConnection({ 
      host: process.env.LOGGING_HOST || 'logstash', 
      port: Number(process.env.LOGGING_PORT) || 5000 
    });

    this.socket.on('error', (err) => {
      console.error('Logstash connection error:', err);
    });
  }

  log(info: any, callback: () => void): void {
    this.socket.write(JSON.stringify(info) + '\n');
    callback();
  }
}

@Injectable()
export class AppLogger implements LoggerService, OnModuleInit, OnModuleDestroy {
  private logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [new LogstashTransport()],
  });

  private taskCreationCount = 0; 
  private interval: NodeJS.Timeout; 

  onModuleInit() {
    this.startTaskCountLogging();
  }

  onModuleDestroy() {
    clearInterval(this.interval);
  }

  private startTaskCountLogging() {
    this.interval = setInterval(() => {
      if (this.taskCreationCount > 0) {
        this.logger.info({
          event: 'tasks_created_per_minute',
          count: this.taskCreationCount,
          timestamp: new Date().toISOString(),
        });
        this.taskCreationCount = 0; 
      }
    }, 60 * 1000); 
  }

  log(message: string) {
    this.logger.info({ message });
  }

  error(message: string, trace?: string) {
    this.logger.error({ message, trace });
  }

  warn(message: string) {
    this.logger.warn({ message });
  }

  trackTaskCreation() {
    this.taskCreationCount++;
  }
}
