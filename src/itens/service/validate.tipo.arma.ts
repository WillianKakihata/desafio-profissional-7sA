import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { ItensService } from "src/itens/service/itens.service";

@ValidatorConstraint({async: true})
@Injectable()
export class ValidateCategoryItens implements ValidatorConstraintInterface {
    async validate(itens: string, validationArguments: ValidationArguments): Promise<boolean>  {
        const defesa = validationArguments.object['defesa'];
        const forca = validationArguments.object['forca']
        if(itens == 'ARMA' && defesa > 0) return false;
        if(itens == 'ARMADURA' && forca > 0) return false;
        return true;
    }
}

export function IsValidateCategoryItens(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: ValidateCategoryItens
        });

    }
}