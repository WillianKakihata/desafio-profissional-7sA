import { IsEnum } from "class-validator";
import { ClasseEnum } from "../enum/classe.enum";

export class CreatePersonagemDto {
    name: string;
    name_adventure: string;
    @IsEnum(ClasseEnum, {message: 'Tem que ser uma das classes listadas: GUERREIRO, MAGO, ARQUEIRO, LADINO, BARDO'})
    class: ClasseEnum;
    level: number;
    itensMagic: string[];
    atribute_force: number;
    atribute_defense: number;
}