/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { cardsEntity } from './interface/cards.entity';
import { createCardDTO } from './dtos/createCard.dto';

@Injectable()
export class CardsService {
    
    constructor (
        @InjectRepository(cardsEntity)
        private readonly cardRepository:Repository<cardsEntity>,
    ) {}
    
    //Função que cria a carta:
    async createCards(createCardsDTO: createCardDTO): Promise<cardsEntity> {
        return this.cardRepository.save({
            ...createCardsDTO
        });
    }

    //Função que retorna todas as Cartas:
    async gettingCards(): Promise<cardsEntity[]> {
        return this.cardRepository.find();
    }

    //Função que pesquisa uma carta pelo parâmetro de query:
    async searchCard(query: any): Promise<cardsEntity[]> {
        const queryBuilder = this.cardRepository.createQueryBuilder('cards');

        Object.keys(query).forEach((key) => {
            if(query[key]) {
                queryBuilder.andWhere(`cards.${key} LIKE :${key}`, {[key]: `%${query[key]}%`});
            }
        });

        return queryBuilder.getMany();
    }


    async searchCardByName(name: string): Promise<cardsEntity[]> {
        return this.cardRepository.find({
            where: {
                cardname: name, 
            },
        });
    }
    
}