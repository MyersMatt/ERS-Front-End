import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidatorsDirective} from "../../directives/custom-validators.directive";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'), Validators.required]),
      confirm_password: new FormControl('', Validators.required)
    },
    [CustomValidatorsDirective.MatchValidator('password', 'confirm_password')]
  )

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  onSubmit(e: any) {
    if (this.registerForm.valid) this.authService.register(this.registerForm.value.email || "", this.registerForm.value.username || "", this.registerForm.value.email || "");
  }
}
