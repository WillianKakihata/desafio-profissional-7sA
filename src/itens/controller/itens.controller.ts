import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { ItensService } from "../service/itens.service";
import { CreateItensDto } from "../dto/create-itens.enum";
import { UpdateItensDto } from "../dto/update-itens.enum";


@UsePipes(ValidationPipe)
@Controller('itens')
export class ItensController {
    constructor(private readonly itensService: ItensService) { }

    @Post('create')
    public async create(@Body() itens: CreateItensDto) {
        try {
            return await this.itensService.create(itens);
        } catch (error) {
            throw new HttpException({ "message": "Erro ao criar todos os item", error: error.message }, HttpStatus.BAD_REQUEST)
        }

    }

    @Get('find')
    public async findAll() {
        try {
            return await this.itensService.findAll();
        } catch (error) {
            throw new HttpException({ "message": "Erro ao listar todos os item", error: error.message }, HttpStatus.BAD_REQUEST)
        }

    }


    @Get('find/:id')
    public async findOne(@Param('id') id: string) {
        try {
            return await this.itensService.findOne(id);
        } catch (error) {
            throw new HttpException({ "message": "Erro ao procurar um item", error: error.message }, HttpStatus.BAD_REQUEST)
        }

    }

    @Get('find-name/:name')
    public async findName(@Param('name') name: string) {
        try {
            return await this.itensService.findNameItens(name);
        } catch (error) {
            throw new HttpException({ "message": "Erro ao procurar um item", error: error.message }, HttpStatus.BAD_REQUEST)
        }

    }


    @Delete('delete/:id')
    public async delete(@Param('id') id: string) {
        try {
            return await this.itensService.delete(id)
        } catch (error) {
            throw new HttpException({ "message": "Erro ao deletar um item", error: error.message }, HttpStatus.BAD_REQUEST)
        }

    }


    @Put('update/:id')
    public async update(@Param('id') id: string, @Body() name: UpdateItensDto) {
        try {
            return await this.itensService.update(id, name);

        } catch (error) {
            throw new HttpException({ "message": "Erro ao atualizar um item", error: error.message }, HttpStatus.BAD_REQUEST)
        }

    }
}