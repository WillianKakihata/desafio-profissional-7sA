import { IsEnum } from "class-validator";
import { ClasseEnum } from "../enum/classe.enum";
import { IsValidateAtributtesDefense } from "../service/validate-atributtes-defense";

export class CreatePersonagemDto {
    name: string;
    name_adventure: string;
    @IsEnum(ClasseEnum, {message: 'Tem que ser uma das classes listadas: GUERREIRO, MAGO, ARQUEIRO, LADINO, BARDO'})
    class: ClasseEnum;
    level: number;
    itensMagic: string[];
    atribute_force: number;
    @IsValidateAtributtesDefense({message: 'a força e defesa, devem somar ao todo 10 ou menos, e não pode valor negativo'})
    atribute_defense: number;
}