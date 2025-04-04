/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1741722046863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
           CREATE TABLE public.user (
                user_id SERIAL PRIMARY KEY,
                username VARCHAR(255) NOT NULL,
                user_email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                mudae_active BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP    
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DROP TABLE public.user;
        `);
    }
}