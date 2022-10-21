import {Directive} from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[appCustomValidators]'
})
export class CustomValidatorsDirective {

  constructor() {
  }

  static passwordMatch(matchTo: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent && !!control.parent.value && control.value
        === (control.parent?.controls as any)[matchTo].value ? null : {mismatch: true};
    };
  }
}
