import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateItensDto } from "../dto/create-itens.enum";
import { Itens } from "../model/itens.model";


@Injectable()
export class ItensService {
    constructor(
        @InjectModel(Itens.name) private itensRepository: Model<Itens>
    ) { }

    public async create(itens: CreateItensDto) {
        return await this.itensRepository.create(itens)
    }

    public async findAll() {
        return await this.itensRepository.find()
    }

    public async findOne(id: string) {
        return await this.itensRepository.findById(id)

    }

    public async update(id: string, itensRepository: CreateItensDto) {
        return await this.itensRepository.findByIdAndUpdate(id, itensRepository)

    }

    public async delete(id: string) {
        return await this.itensRepository.deleteOne({ _id: id });
    }


}