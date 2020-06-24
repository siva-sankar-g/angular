import { AbstractControl, ValidationErrors } from '@angular/forms';


export class usernamevalidator{
    cannotwhitespace(control:AbstractControl):ValidationErrors | null{
        
        return { obj : control}
    }
}



