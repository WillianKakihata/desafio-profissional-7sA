import { Injectable } from "@nestjs/common";
import { isValidationOptions, registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({async: true})
@Injectable()
export class ValidateAtributtesDefenselRule implements ValidatorConstraintInterface {

    async validate(points: any, validationArguments?: ValidationArguments): Promise<boolean>{
        const atribute_force = validationArguments.object['atribute_force'];
        if (points > 10) return false;
        if (points < 0) return false;

        if(points == 10) {
            if (atribute_force <= 0 && atribute_force >= 0) return true;
        }
        if(points == 9) {
            if (atribute_force <= 1 && atribute_force >= 0) return true;
        }
        if(points == 8) {
            if (atribute_force <= 2 && atribute_force >= 0) return true;
        }
        if(points == 7) {
            if (atribute_force <= 3 && atribute_force >= 0) return true;
        }
        if(points == 6) {
            if(atribute_force <= 4 && atribute_force >= 0) return true;
        }
        if(points == 5) {
            if (atribute_force <= 5 && atribute_force >= 0) return true;
        }
        if(points == 4) {
            if (atribute_force <= 6 && atribute_force >= 0) return true;
        }
        if(points == 3) {
            if (atribute_force <= 7 && atribute_force >= 0) return true;
        }
        if(points == 2) {
            if (atribute_force <= 8 && atribute_force >= 0) return true;
        }
        if(points == 1) {
            if (atribute_force <= 9 && atribute_force >= 0) return true;
        }
        if(points == 0) {
            if (atribute_force <= 10 && atribute_force >= 0) return true;
        }        
        
    }
}

export function IsValidateAtributtesDefense(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: ValidateAtributtesDefenselRule
        });

    }
}