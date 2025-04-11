import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ClasseEnum } from "../enum/classe.enum";


@Schema()

export class Personagem {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    name_adventure: string;
    @Prop({ required: true })
    class: ClasseEnum;
    @Prop({ required: true })
    level: number;
    @Prop({ required: true })
    itensMagic: string[]
    @Prop({ required: true })
    atribute_force: number;
    @Prop({ required: true })
    atribute_defense: number;
}

export const PersonagemSchema = SchemaFactory.createForClass(Personagem);