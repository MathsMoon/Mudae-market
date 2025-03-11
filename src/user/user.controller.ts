/* eslint-disable prettier/prettier */
 
import { CreateUserDTO } from './dtos/createUser.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './interfaces/user.entity';


@Controller('user')
export class UserController {
    
    //Contém o parâmetro do serviço para conversão do DTO para Objeto json.
    constructor(private readonly user_service:UserService) {}
    
    //Criando um novo usuário:
    @Post()
    async createUser(@Body() createUser: CreateUserDTO) {
        return this.user_service.createUser(createUser);
    }

    //Retornando a Lista de Usuários:
    @Get()
    async gettingUsers(): Promise<UserEntity[]> {
        return this.user_service.gettingUsers();
    }
}