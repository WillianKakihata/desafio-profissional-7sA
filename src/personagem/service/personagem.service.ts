import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Personagem } from "../model/personagem.model";
import { CreatePersonagemDto } from "../dto/create-personagem.dto";
import { UpdateNameDto } from "../dto/update-name.dto";
import { ItensService } from "src/itens/service/itens.service";
import { InsertionItensCharacterDTO } from "../dto/insertion-itens.dto";
import { TipoItemEnum } from "src/itens/enum/tipo-item.enum";

@Injectable()
export class PersonagemService {
    constructor(
        @InjectModel(Personagem.name) private personagemRepository: Model<Personagem>,
        private readonly itensService: ItensService) { }

    public async create(personagem: CreatePersonagemDto) {
        return await this.personagemRepository.create(personagem)
    }

    public async findAll() {
        return await this.personagemRepository.find()
    }

    public async findOne(id: string) {
        return await this.personagemRepository.findById(id)

    }

    public async updateName(id: string, namePerson: UpdateNameDto) {
        return await this.personagemRepository.findByIdAndUpdate(id, { name: namePerson.name }, { new: true })

    }

    public async delete(id: string) {
        return await this.personagemRepository.deleteOne({ _id: id });
    }

    public async atributteItens(persona: string, nameItens: string[]) {
        let totalforca = 0;
        let totaldefesa = 0;
        for (const i of nameItens) {
            const item = await this.itensService.findNameItens(i);
            totalforca += item.forca;
            totaldefesa += item.defesa;
        }

        return await this.personagemRepository.findByIdAndUpdate(persona, {
            $inc: {
                atribute_force: totalforca,
                atribute_defense: totaldefesa,
            }
        }, {
            new: true
        })

    }

    public async findAmuletePerson(id: string) {
        const personagem = await this.findOne(id)
        const todosItens = await Promise.all(personagem.itensMagic.map((nome: string) => this.itensService.findNameItens(nome)));
        const amuletos = todosItens.filter(item => item.tipoItem == TipoItemEnum.AMULETO);
        return amuletos;
    }

    public async atributteItensAndAcrescentItens(persona: string, nameItens: string[]) {
        let totalforca = 0;
        let totaldefesa = 0;
        let newItens: string[] = [];
        let quantidadeAmuletoNovos = 0;
        const personagem = await this.personagemRepository.findById(persona);
        const amuleto = await this.findAmuletePerson(persona);

        let quantidadeAmuletoAtuais = amuleto.length;

        for (const i of nameItens) {
            const item = await this.itensService.findNameItens(i);
            if (personagem.itensMagic.includes(item.name)) continue;
            if (item.tipoItem == TipoItemEnum.AMULETO) quantidadeAmuletoNovos++;
            totalforca += item.forca;
            totaldefesa += item.defesa;
            newItens.push(item.name)
        }

        if (quantidadeAmuletoAtuais + quantidadeAmuletoNovos > 1) {
            throw new Error("O personagem só pode possuir um único amuleto.");
        }

        if (newItens.length === 0) {
            return personagem;
        }

        return await this.personagemRepository.findByIdAndUpdate(persona, {
            $inc: {
                atribute_force: totalforca,
                atribute_defense: totaldefesa,
            },
            $push: {
                itensMagic: { $each: newItens }
            }
        }, {
            new: true
        }
        );

    }

    public async addItensCharacter(id: string, itensName: InsertionItensCharacterDTO) {
        return await this.atributteItensAndAcrescentItens(id, itensName.itens);
    }

    public async findItensCharacter(id: string) {
        const personagem = await this.findOne(id)
        let itensMagics = [];
        for (const i of personagem.itensMagic) {
            const itens = await this.itensService.findNameItens(i)
            itensMagics.push(itens)
        }
        return itensMagics;
    }

    public async removeItensCharacter(id: string, itensName: InsertionItensCharacterDTO) {
        const personagem = await this.personagemRepository.findById(id);
        let totalforca = 0;
        let totaldefesa = 0;
        let itensParaRemover: string[] = [];

        for (const i of itensName.itens) {
            if (personagem.itensMagic.includes(i)) {
                const item = await this.itensService.findNameItens(i);
                totalforca += item.forca;
                totaldefesa += item.defesa;
                itensParaRemover.push(i);
            }

        }

        if (itensParaRemover.length === 0) {
            throw new Error("Nenhum dos itens fornecidos está presente no personagem.");
        }

        return await this.personagemRepository.findByIdAndUpdate(id, {
            $pull: {
                itensMagic: { $in: itensParaRemover }
            },
            $inc: {
                atribute_defense: -totaldefesa,
                atribute_force: -totalforca
            }
        }, { new: true }
        );

    }







}