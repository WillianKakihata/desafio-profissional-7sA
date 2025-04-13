import { Injectable } from "@nestjs/common";
import { isValidationOptions, registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({async: true})
@Injectable()
export class ValidateAtributtesForceRule implements ValidatorConstraintInterface {

    async validate(points: any, validationArguments?: ValidationArguments): Promise<boolean>{
        const atribute_defense = validationArguments.object['atribute_defense'];
        if (points > 10) return false;
        if (points < 0) return false;

        if(points == 10) {
            if (atribute_defense <= 0 && atribute_defense >= 0) return true;
        }
        if(points == 9) {
            if (atribute_defense <= 1 && atribute_defense >= 0) return true;
        }
        if(points == 8) {
            if (atribute_defense <= 2 && atribute_defense >= 0) return true;
        }
        if(points == 7) {
            if (atribute_defense <= 3 && atribute_defense >= 0) return true;
        }
        if(points == 6) {
            if(atribute_defense <= 4 && atribute_defense >= 0) return true;
        }
        if(points == 5) {
            if (atribute_defense <= 5 && atribute_defense >= 0) return true;
        }
        if(points == 4) {
            if (atribute_defense <= 6 && atribute_defense >= 0) return true;
        }
        if(points == 3) {
            if (atribute_defense <= 7 && atribute_defense >= 0) return true;
        }
        if(points == 2) {
            if (atribute_defense <= 8 && atribute_defense >= 0) return true;
        }
        if(points == 1) {
            if (atribute_defense <= 9 && atribute_defense >= 0) return true;
        }
        if(points == 0) {
            if (atribute_defense <= 10 && atribute_defense >= 0) return true;
        }        
        
    }
}

export function IsValidateAtributtesForce(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: ValidateAtributtesForceRule
        });

    }
}