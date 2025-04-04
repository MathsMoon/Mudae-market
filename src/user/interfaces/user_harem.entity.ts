/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('user_harem')
export class user_harem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'harem_name'})
    haremName: string;

    @Column({ name: 'harem_qtd'})
    haremQTD: number;
}    