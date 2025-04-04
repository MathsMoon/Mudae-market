/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUserHarem1742412206801 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`          
            CREATE TABLE public.user_harem (
                user_id INTEGER,
                card_id INTEGER,
                PRIMARY KEY (user_id, card_id),
                
                -- Definindo as chaves estrangeiras
                CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES "user"(user_id) ON DELETE CASCADE,
                CONSTRAINT fk_card FOREIGN KEY (card_id) REFERENCES cards(id) ON DELETE CASCADE
            );   
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
           DROP TABLE public.user_harem; 
        `);
    }
}