import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-from.component.html',
  styleUrls: ['./contact-from.component.css']
})
export class ContactFromComponent  {

 form = new FormGroup({
   'username' : new FormControl('',[
     Validators.required,
     Validators.minLength(5),
     Validators.maxLength(8)
    ]),
   'password':new FormControl("",Validators.required)
 });

 get username(){
  return this.form.get('username')
 }
  
}
