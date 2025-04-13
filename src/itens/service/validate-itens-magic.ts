import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Model } from "mongoose";
import { Itens } from "src/itens/model/itens.model";
import { ItensService } from "src/itens/service/itens.service";

@ValidatorConstraint({async: true})
@Injectable()
export class ValidateItensMagic implements ValidatorConstraintInterface {
    constructor(private readonly itensService: ItensService) {}
    async validate(item: string[]): Promise<boolean>  {
        for (const name of item) {
            const itens = await this.itensService.findNameItens(name);
            if (!itens) return false;
        }
        return true
        
        
    }
}

export function IsValidateItensMagic(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: ValidateItensMagic
        });

    }
}