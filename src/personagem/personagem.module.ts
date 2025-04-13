import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Personagem, PersonagemSchema } from "./model/personagem.model";
import { PersonagemService } from "./service/personagem.service";
import { PersonagemController } from "./controller/personagem.controller";
import { ValidateAtributtesDefenselRule } from "./service/validate-atributtes-defense";

@Module({
    imports: [MongooseModule.forFeature([{ name: Personagem.name, schema: PersonagemSchema }])], 
    controllers: [PersonagemController],
    providers: [PersonagemService, ValidateAtributtesDefenselRule],
  })
  export class PersonagemModule {}