import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Itens, ItensSchema } from "./model/itens.model";
import { ItensController } from "./controller/itens.controller";
import { ItensService } from "./service/itens.service";


@Module({
    imports: [MongooseModule.forFeature([{ name: Itens.name, schema: ItensSchema}])], 
    controllers: [ItensController],
    providers: [ItensService],
  })
  export class ItensModule {}