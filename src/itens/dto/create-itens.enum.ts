import { IsEnum } from "class-validator";
import { TipoItemEnum } from "../enum/tipo-item.enum";
import { IsValidateCategoryItens } from "../service/validate.tipo.arma";

export class CreateItensDto {
    name: string;
    @IsValidateCategoryItens({message: 'arma só pode ter força, e nenhuma defesa / Armadura pode ter apenas defesa, e nenhuma força'})
    @IsEnum(TipoItemEnum, {message: 'O tipo do item deve ser: ARMA, ARMADURA E ARTEFATO'})
    tipoItem: TipoItemEnum;
    forca: number;
    defesa: number;
}