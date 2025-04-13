import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { ItensService } from "./itens.service";

@ValidatorConstraint({async: true})
@Injectable()
export class ValidateItensAmuletePerson implements ValidatorConstraintInterface {
    constructor(private readonly itensService: ItensService) {}
    async validate(item: string[]): Promise<boolean>  {
        let amuletes = 0;
        for (const name of item) {
            const itens = await this.itensService.findNameItens(name);
            if (itens.tipoItem == 'AMULETO') {
                amuletes += 1;
                if(amuletes == 2) return false;
            }
        }
        return true
        
        
    }
}

export function IsValidateOneAmulete(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: ValidateItensAmuletePerson
        });

    }
}