import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonagemModule } from './personagem/personagem.module';
import { ItensModule } from './itens/itens.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/rpg_atividade'), PersonagemModule, ItensModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
