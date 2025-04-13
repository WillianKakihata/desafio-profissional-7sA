import { IsEnum } from "class-validator";
import { TipoItemEnum } from "../enum/tipo-item.enum";

export class UpdateItensDto {
    name: string;
    @IsEnum(TipoItemEnum, {message: 'O tipo do item deve ser: ARMA, ARMADURA E AMULETO'})
    tipoItem: TipoItemEnum;
    forca: number;
    defesa: number;
}