/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath: ['.env.development.local'],
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    password: String(process.env.DB_PASSWORD),
    port: Number(process.env.DB_PORT),
    entities: [path.join(__dirname, '**', '*.entity{.ts,.js}')],
    migrations: [path.join(__dirname, 'migration', '{.ts,*.js}')],
    migrationsRun: true
  }),
  UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}