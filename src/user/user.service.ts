/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { CreateUserDTO } from './dtos/createUser.dto';
import { Injectable } from '@nestjs/common';
import { UserEntity } from './interfaces/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    
    constructor (
        @InjectRepository(UserEntity)
        private readonly userRepository:Repository<UserEntity>,
    ) {}
    
    async createUser(createUserDTO: CreateUserDTO): Promise<UserEntity> {
        
        // Criptografando a senha:
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(createUserDTO.password, saltOrRounds);
        
        //Salvando o objeto com a Senha criptografada.
        return this.userRepository.save({
            ...createUserDTO,
            password: String(hash),
        });
    }

    //Função que retorna todo os usuários:
    async gettingUsers(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }
}