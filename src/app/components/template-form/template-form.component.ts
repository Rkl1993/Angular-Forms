import { Component, OnInit } from '@angular/core';
import { Register } from '../../model/template';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  constructor() { }

  model = new Register( "", "", "", "");
  
  onsubmit() {

    console.log("firstName", this.model.firstName);
    console.log("lastName", this.model.lastName);
    console.log("email", this.model.email);
    console.log("password", this.model.password);
  
  }

}
