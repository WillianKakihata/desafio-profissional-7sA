import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Personagem } from "../model/personagem.model";
import { CreatePersonagemDto } from "../dto/create-personagem.dto";

@Injectable()
export class PersonagemService {
    constructor(
        @InjectModel(Personagem.name) private personagemRepository: Model<Personagem> ) {}

    public async create(personagem: CreatePersonagemDto ) {
        return await this.personagemRepository.create(personagem)
    }


}