/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_mudae')
export class user_mudae {


    @PrimaryGeneratedColumn()
    id: number;

    //Componente que ativa caso o usuário habilite o mudae:


    // Seção que reuni Usuário e Hárem:


    @Column({ name: 'kakera_reacted'})
    kakeraReacted: number;
   
    @Column({ name: 'kakera'})
    kakera: number;
}    