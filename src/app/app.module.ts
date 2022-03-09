import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {AppRoutingModule}from './app-routing.module';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { PasswordPatternDirective } from './directive/Password/passwordvalidator.directive';
import { EmailvalidatorDirective } from './directive/email/emailvalidator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    PasswordPatternDirective,
    EmailvalidatorDirective 
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
