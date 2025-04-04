/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardsService } from './cards.service';
import { createCardDTO } from './dtos/createCard.dto';
import { cardsEntity } from './interface/cards.entity';


@Controller('cards')
export class CardsController {
    
    //Contém o parâmetro do serviço para conversão do DTO para Objeto json.
    constructor(private readonly card_service:CardsService) {}
    
    //Criando uma nova carta:
    @Post()
    async createCard(@Body() createdCard: createCardDTO) {
        return this.card_service.createCards(createdCard);
    }

    //Retornando a Lista de Cartas existentes:
    @Get()
    async gettingCards(): Promise<cardsEntity[]> {
        return this.card_service.gettingCards();
    }

    //Retornando uma pesquisa especificada pelo query params.
    @Post('search') // Usando POST em vez de GET
    async searchCard(@Body() body: { name: string }): Promise<cardsEntity[]> {
      const { name } = body;  // Extraindo o 'name' do corpo
      return this.card_service.searchCardByName(name);  // Chama o serviço com o nome
    }
}