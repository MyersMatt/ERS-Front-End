import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card'
import {AppComponent} from './app.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomValidatorsDirective} from './directives/custom-validators.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    CustomValidatorsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
