/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({ name: 'user'})
export class UserEntity {
    
    //Gerando o ID como chave primária.
    @PrimaryGeneratedColumn()
    user_id: number;

    //Seção das Colunas da Entidade Usuário:
    @Column({ name: 'username', nullable: false })
    username: string;

    @Column({ name: 'user_email', nullable: false })
    userEmail: string;

    @Column({ name: 'password', nullable: false })
    password: string;

    @Column({ name: 'mudae_active', nullable: false })
    mudaeActive: boolean;

    // Seção de Registro de criação e alteração do Usuário
    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Date;
}