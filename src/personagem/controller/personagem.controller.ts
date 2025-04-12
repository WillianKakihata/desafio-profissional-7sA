import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { PersonagemService } from "../service/personagem.service";
import { CreatePersonagemDto } from "../dto/create-personagem.dto";
import { UpdateNameDto } from "../dto/update-name.dto";


@Controller('personagem')
@UsePipes(new ValidationPipe)
export class PersonagemController {
    constructor(private readonly personagemService: PersonagemService) { }

    @Post('create')
    public async create(@Body() personagem: CreatePersonagemDto) {
        try {
            return await this.personagemService.create(personagem);
        } catch (error) {
            throw new HttpException({ "message": "Erro ao criar um personagem" }, HttpStatus.BAD_REQUEST)
        }

    }

    @Get('find')
    public async findAll() {
        try {
            return await this.personagemService.findAll();
        } catch (error) {
            throw new HttpException({ "message": "Erro ao listar todos os personagem" }, HttpStatus.BAD_REQUEST)
        }

    }


    @Get('find/:id')
    public async findOne(@Param('id') id: string) {
        try {
            return await this.personagemService.findOne(id);
        } catch (error) {
            throw new HttpException({ "message": "Erro ao procurar um personagem" }, HttpStatus.BAD_REQUEST)
        }

    }


    @Delete('delete/:id')
    public async delete(@Param('id') id: string) {
        try {
            return await this.personagemService.delete(id)
        } catch (error) {
            throw new HttpException({ "message": "Erro ao deletar um personagem" }, HttpStatus.BAD_REQUEST)
        }
        
    }


    @Put('update-name/:id')
    public async update(@Param('id') id: string, @Body() name: UpdateNameDto) {
        try {
            const updatename = await this.personagemService.updateName(id, name);
            return updatename;
        } catch (error) {
            throw new HttpException({ "message": "Erro ao atualizar um personagem" }, HttpStatus.BAD_REQUEST)
        }
        
    }

}