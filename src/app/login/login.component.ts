import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


///login group
loginForm = this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
})

 constructor (private fb:FormBuilder){

 }

  login(){
    if(this.loginForm.valid){
      alert('Login clicked!!')
      let acno = this.loginForm.value.acno
      let pswd = this.loginForm.value.pswd
        
    }
    else{
      alert('Invalid Form')
    }
  }

}
