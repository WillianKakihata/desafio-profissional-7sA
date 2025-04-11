import { TipoItemEnum } from "../enum/tipo-item.enum";

export class CreateItensDto {
    name: string;
    tipoItem: TipoItemEnum;
    forca: number;
    defesa: number;
}