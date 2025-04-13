import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Personagem } from "../model/personagem.model";
import { CreatePersonagemDto } from "../dto/create-personagem.dto";
import { UpdateNameDto } from "../dto/update-name.dto";
import { ItensService } from "src/itens/service/itens.service";

@Injectable()
export class PersonagemService {
    constructor(
        @InjectModel(Personagem.name) private personagemRepository: Model<Personagem>,
        private readonly itensService: ItensService) {}

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
        return await this.personagemRepository.findByIdAndUpdate(id, {name: namePerson.name}, {new: true})
        
    }

    public async delete(id: string) {
        return await this.personagemRepository.deleteOne({_id: id});
    }

    public async atributteItens(persona: string, nameItens: string[]) {
        let totalforca = 0;
        let totaldefesa= 0;
        for (const i of nameItens){
            const item = await this.itensService.findNameItens(i);
            totalforca += item.forca;
            totaldefesa += item.defesa;
        }

         return await this.personagemRepository.findByIdAndUpdate(persona, {$inc: {
            atribute_force: totalforca,
            atribute_defense: totaldefesa
         }}, {
            new: true
         })
    
    }



    


}