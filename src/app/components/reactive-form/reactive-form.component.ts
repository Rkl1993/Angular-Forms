import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userForm!:FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userForm= this.fb.group({
      FullName :[''],
      UserName :[''],
      Email :[''],
      Password :[''],
      ConfirmPassword :[''],
      Checkbox:['']
    })
 
  }
  onSubmit(){
    console.log(this.userForm.value)
  }
}
