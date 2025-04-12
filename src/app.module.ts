import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonagemModule } from './personagem/personagem.module';
import { ItensModule } from './itens/itens.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/rpg_atividade'), PersonagemModule, ItensModule], 
  controllers: [],
  providers: [],
})
export class AppModule {}
