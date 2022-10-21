import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RegistrationComponent} from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });
  it('email field validity', () => {
    let email = component.registerForm.controls["email"];
    expect(email.valid).toBeFalsy();
  })
  it('username field validity', () => {
    let username = component.registerForm.controls["username"];
    expect(username.valid).toBeFalsy();
  })
  it('password field validity', () => {
    let password = component.registerForm.controls["password"];
    expect(password.valid).toBeFalsy();
  })
  it('confirmPassword field validity', () => {
    let confirmPassword = component.registerForm.controls["confirmPassword"];
    expect(confirmPassword.valid).toBeFalsy();
  })

  it('email field check validator', () => {
    let email = component.registerForm.controls["email"];
    email.setValue("test");
    let errors = email.errors || {};
    expect(errors['patten']).toBeTruthy();
  });
});
