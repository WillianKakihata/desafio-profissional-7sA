import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Itens, ItensSchema } from "./model/itens.model";
import { ItensController } from "./controller/itens.controller";
import { ItensService } from "./service/itens.service";
import { Personagem, PersonagemSchema } from "src/personagem/model/personagem.model";
import { ValidateItensMagic } from "src/itens/service/validate-itens-magic";
import { ValidateItensAmuletePerson } from "./service/validate-one-amulete-person";


@Module({
    imports: [MongooseModule.forFeature([{ name: Itens.name, schema: ItensSchema}])], 
    controllers: [ItensController],
    providers: [ItensService, ValidateItensMagic, ValidateItensAmuletePerson],
    exports: [ItensService, ValidateItensMagic, ValidateItensAmuletePerson]
  })
  export class ItensModule {}