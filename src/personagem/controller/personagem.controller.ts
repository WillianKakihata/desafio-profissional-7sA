import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { PersonagemService } from "../service/personagem.service";
import { CreatePersonagemDto } from "../dto/create-personagem.dto";
import { UpdateNameDto } from "../dto/update-name.dto";
import { InsertionItensCharacterDTO } from "../dto/insertion-itens.dto";


@Controller('personagem')
@UsePipes(new ValidationPipe)
export class PersonagemController {
    constructor(private readonly personagemService: PersonagemService) { }

    @Post('create')
    public async create(@Body() personagem: CreatePersonagemDto) {
        try {
            const personagemCriacao = await this.personagemService.create(personagem);
            const personagemAtributo = await this.personagemService.atributteItens(personagemCriacao._id.toString(), personagem.itensMagic)
            return personagemAtributo;
        } catch (error) {
            throw new HttpException({"message": "Erro ao criar um personagem", error: error.message}, HttpStatus.BAD_REQUEST)
        }

    }

    @Get('find')
    public async findAll() {
        try {
            return await this.personagemService.findAll();
        } catch (error) {
            throw new HttpException({ "message": "Erro ao listar todos os personagem", error: error.message}, HttpStatus.BAD_REQUEST)
        }

    }


    @Get('find/:id')
    public async findOne(@Param('id') id: string) {
        try {
            return await this.personagemService.findOne(id);
        } catch (error) {
            throw new HttpException({ "message": "Erro ao procurar um personagem", error: error.message }, HttpStatus.BAD_REQUEST)
        }

    }


    @Delete('delete/:id')
    public async delete(@Param('id') id: string) {
        try {
            return await this.personagemService.delete(id)
        } catch (error) {
            throw new HttpException({ "message": "Erro ao deletar um personagem", error: error.message }, HttpStatus.BAD_REQUEST)
        }
        
    }


    @Put('update-name/:id')
    public async update(@Param('id') id: string, @Body() name: UpdateNameDto) {
        try {
            const updatename = await this.personagemService.updateName(id, name);
            return updatename;
        } catch (error) {
            throw new HttpException({ "message": "Erro ao atualizar um personagem", error: error.message }, HttpStatus.BAD_REQUEST)
        }
        
    }

    @Post('insertion-itens/:id')
    public async insertionItens(@Param('id') id: string, @Body() itens: InsertionItensCharacterDTO) {
        try {
            const insertion = await this.personagemService.addItensCharacter(id, itens);
            return insertion;
        } catch (error) {
            throw new HttpException({ "message": "Erro ao colocar um item no personagem", error: error.message }, HttpStatus.BAD_REQUEST)
        }
    }

    @Get('find-itens/:id')
    public async findItensPerson(@Param('id') id: string ) {
        try {
            return await this.personagemService.findItensCharacter(id);
        } catch (error) {
            throw new HttpException({ "message": "Erro ao listar todos os itens do personagem", error: error.message }, HttpStatus.BAD_REQUEST)
        }

    }

    @Put('delete-itens-character/:id')
    public async deleteItensCharacter(@Param('id') id: string, @Body() nameItens: InsertionItensCharacterDTO){
        try {
            return await this.personagemService.removeItensCharacter(id, nameItens);
        } catch (error) {
            throw new HttpException({ "message": "Erro ao retirar os itens do personagem", error: error.message }, HttpStatus.BAD_REQUEST)
        }
    }

    @Get('find-amuleto/:id')
    public async findAmuleto(@Param('id') id: string) {
        try {
            return await this.personagemService.findAmuletePerson(id);
        } catch (error) {
            throw new HttpException({ "message": "Erro ao encontrar amuletos do personagem", error: error.message }, HttpStatus.BAD_REQUEST)
        }
    }

}