import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidatorsDirective} from "../../directives/custom-validators.directive";
import {distinctUntilChanged, tap} from "rxjs";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.min(8),
        Validators.required]
      ),
      confirmPassword: new FormControl('', [
        Validators.required,
        CustomValidatorsDirective.passwordMatch('password')])
    },
  )

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.registerForm.controls.password.valueChanges.subscribe(
      ()=>{
        this.registerForm.controls.confirmPassword.updateValueAndValidity();
      });
  }


  onSubmit() {
    console.log("here")
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value.email || "", this.registerForm.value.username || "", this.registerForm.value.email || "");
  }
}
