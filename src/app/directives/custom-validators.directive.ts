import {Directive} from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[appCustomValidators]'
})
export class CustomValidatorsDirective {

  constructor() {
  }

  static passwordMatchValidator(p1: string, p2: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      console.log("checking if passwords match")
      const password1 = control.get(p1);
      const password2 = control.get(p2);
      return password1 !== password2 ? {mismatch: true} : null;
    }
  }
}
