import { Body, Controller, Post } from "@nestjs/common";
import { PersonagemService } from "../service/personagem.service";
import { CreatePersonagemDto } from "../dto/create-personagem.dto";

@Controller('personagem')
export class PersonagemController {
    constructor(private readonly personagemService: PersonagemService) {}

    @Post('create')
    public async create(@Body() personagem: CreatePersonagemDto) {
        return await this.personagemService.create(personagem);
    }
}