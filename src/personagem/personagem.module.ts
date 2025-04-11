import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "src/app.controller";
import { Personagem, PersonagemSchema } from "./model/personagem.model";
import { PersonagemService } from "./service/personagem.service";
import { PersonagemController } from "./controller/personagem.controller";

@Module({
    imports: [MongooseModule.forFeature([{ name: Personagem.name, schema: PersonagemSchema }])], 
    controllers: [PersonagemController],
    providers: [PersonagemService],
  })
  export class PersonagemModule {}