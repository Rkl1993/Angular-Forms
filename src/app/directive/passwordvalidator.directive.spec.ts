import { Attribute, Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, ValidatorFn, FormControl } from '@angular/forms';  

@Directive({
  selector: '[appPasswordPattern]',
  providers: [  
    {  
      provide: NG_VALIDATORS,  
      useClass:PasswordPatternDirective,  
      multi: true  
    }  
  ] 
})
export class PasswordPatternDirective {
  validator: ValidatorFn;  
  constructor() {  
    this.validator = this.passValidate();  
  } 
  validate(c: FormControl) {  
    return this.validator(c);  
  } 
  passValidate(): ValidatorFn {  
    return (control: any) => {  
      if (control.value != null && control.value !== '') {  
        let isValid = /^(?=.*[A-Z][a-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(control.value);  
        if (isValid) {  
          return null;  
        } else {  
          return {  
            passValidate: { valid: false }  
          };  
        }  
      } else {  
        return null;  
      }  
    };  
  }
}
