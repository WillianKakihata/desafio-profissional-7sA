import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { TipoItemEnum } from "../enum/tipo-item.enum";

@Schema()
export class Itens {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    tipoItem: TipoItemEnum;
    @Prop({ required: true })
    forca: number;
    @Prop({ required: true })
    defesa: number;
}

export const ItensSchema = SchemaFactory.createForClass(Itens);