import { Body, Controller, Post } from "@nestjs/common";
import { ItensService } from "../service/itens.service";
import { CreateItensDto } from "../dto/create-itens.enum";


@Controller('itens')
export class ItensController {
    constructor(private readonly itensService: ItensService) {}

    @Post('create')
    public async create(@Body() itens: CreateItensDto) {
        return await this.itensService.create(itens);
    }
}