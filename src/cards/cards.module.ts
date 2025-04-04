import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cardsEntity } from './interface/cards.entity';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';

@Module({
  imports: [TypeOrmModule.forFeature([cardsEntity])],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
