/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ObjectLiteral, Repository } from 'typeorm';

@Injectable()
export class BasicService<T extends ObjectLiteral> {
  constructor(private readonly repository: Repository<T>) {}

    async createGeneric(createGenericDTO: any): Promise<T[]> {
        const entity = this.repository.create(createGenericDTO);
        return await this.repository.save(entity);
    }

    async findAllGeneric(): Promise<T[]> {
        return this.repository.find();
    }
}
