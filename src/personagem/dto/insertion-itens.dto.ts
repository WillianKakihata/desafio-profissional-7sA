import { IsValidateItensMagic } from "src/itens/service/validate-itens-magic";
import { IsValidateOneAmulete } from "src/itens/service/validate-one-amulete-person";

export class InsertionItensCharacterDTO {
    @IsValidateItensMagic({message: 'O item deve existir'})
    @IsValidateOneAmulete({message: 'Só pode apenas um amuleto'})
    itens: string[];
}