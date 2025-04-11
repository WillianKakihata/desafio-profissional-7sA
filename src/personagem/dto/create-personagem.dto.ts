import { ClasseEnum } from "../enum/classe.enum";

export class CreatePersonagemDto {
    name: string;
    name_adventure: string;
    class: ClasseEnum;
    level: number;
    itensMagic: string[];
    atribute_force: number;
    atribute_defense: number;
}