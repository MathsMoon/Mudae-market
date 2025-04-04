/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCards1742411216378 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE public.cards (
                id SERIAL PRIMARY KEY,
                card_name VARCHAR(255) NOT NULL,
                char_from VARCHAR(255) NOT NULL,
                char_genre VARCHAR(100),
                rank_kakera_value INTEGER,
                rank_likes INTEGER,       
                nickname VARCHAR(255),
                personalized_nick VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DROP TABLE public.cards;
        `);
    }
}