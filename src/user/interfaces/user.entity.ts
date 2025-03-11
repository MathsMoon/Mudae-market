/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({ name: 'mudae_users'})
export class UserEntity {
    
    //Gerando o ID como chave primária.
    @PrimaryGeneratedColumn()
    id: number;

    //Seção das Colunas da Entidade Usuário:
    @Column({ name: 'username', nullable: false })
    username: string;

    @Column({ name: 'password', nullable: false })
    password: string;

    @Column({ name: 'harem_name'})
    haremName: string;

    @Column({ name: 'harem_qtd'})
    haremQTD: number;
    
    @Column({ name: 'kakera_reacted'})
    kakeraReacted: number;
   
    @Column({ name: 'kakera'})
    kakera: number;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Date;
}