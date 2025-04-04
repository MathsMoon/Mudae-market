/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('cards')
export class cardsEntity {

    //Gerando o ID como chave primária.
    @PrimaryGeneratedColumn()
    id: number;

    //Seção das Colunas da Entidade Usuário:
    @Column({ name: 'card_name', nullable: false })
    cardname: string;

    @Column({ name: 'char_from', nullable: false })
    charFrom: string;

    @Column({ name: 'char_genre', nullable: false })
    charGenre: string;
    
    @Column({ name: 'rank_kakera_value', nullable: false })
    rankKaeraValue: number;

    @Column({ name: 'rank_likes', nullable: false })
    rankLikes: number;

    @Column({ name: 'nickname', nullable: false })
    nickname: string;

    @Column({ name: 'personalized_nick'})
    personalizedNick: string;

    // Seção de Registro de criação e alteração do Usuário
    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Date;
} 