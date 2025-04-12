import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Personagem } from "../model/personagem.model";
import { CreatePersonagemDto } from "../dto/create-personagem.dto";
import { UpdateNameDto } from "../dto/update-name.dto";

@Injectable()
export class PersonagemService {
    constructor(
        @InjectModel(Personagem.name) private personagemRepository: Model<Personagem> ) {}

    public async create(personagem: CreatePersonagemDto ) {
        return await this.personagemRepository.create(personagem)
    }

    public async findAll() {
        return await this.personagemRepository.find()    
    }

    public async findOne(id: string) {
        return await this.personagemRepository.findById(id)
       
    }

    public async updateName(id: string, namePerson : UpdateNameDto) {
        return await this.personagemRepository.findByIdAndUpdate(id, {name: namePerson.name})
        
    }

    public async delete(id: string) {
        return await this.personagemRepository.deleteOne({_id: id});
    }



    


}