import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,PatternValidator,Validators} from '@angular/forms';
import { CustomvalidationService } from 'src/app/service/customvalidation.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userForm!:FormGroup;
  submitted=false;
  constructor(private fb: FormBuilder,
   private customValidator: CustomvalidationService ) { }

  ngOnInit(): void {
    this.userForm= this.fb.group({
      FullName :['',Validators.required],
      UserName :['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      Email :['',Validators.required],
      Password :['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      ConfirmPassword :['',Validators.required],
      checkbox:['',Validators.required]
    },
    {
      validator: this.customValidator.MatchPassword('Password', 'ConfirmPassword'),
    })
    
  }
  get fval() {
    return this.userForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    if (this.userForm.valid) {
      alert('Form Submitted succesfully!!!');
    
  }
  console.log(this.userForm.value)
}
onReset(){
  this.submitted=false;
  this.userForm.reset();
}


}
