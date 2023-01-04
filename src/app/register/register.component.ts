import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  ///register group
  RegisterForm = this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
})

 constructor (private fb:FormBuilder){

 }

 register(){
    if(this.RegisterForm.valid){
      alert('Registration Done!!')
      let acno = this.RegisterForm.value.acno
      let pswd = this.RegisterForm.value.pswd
      let uname = this.RegisterForm.value.uname
        
    }
    else{
      alert('Invalid Register')
    }
  }
}
