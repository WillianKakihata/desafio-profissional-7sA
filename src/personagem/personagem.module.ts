import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Personagem, PersonagemSchema } from "./model/personagem.model";
import { PersonagemService } from "./service/personagem.service";
import { PersonagemController } from "./controller/personagem.controller";
import { ValidateAtributtesDefenselRule } from "./service/validate-atributtes-defense";
import { ValidateAtributtesForceRule } from "./service/validate-atributtes-force";
import { ValidateItensMagic } from "../itens/service/validate-itens-magic";
import { ItensService } from "src/itens/service/itens.service";
import { Itens, ItensSchema } from "src/itens/model/itens.model";
import { ItensModule } from "src/itens/itens.module";

@Module({
  imports: [MongooseModule.forFeature([{ name: Personagem.name, schema: PersonagemSchema }]), ItensModule],
  controllers: [PersonagemController],
  providers: [PersonagemService, ValidateAtributtesDefenselRule, ValidateAtributtesForceRule],
})
export class PersonagemModule { }