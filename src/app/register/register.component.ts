import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, UntypedFormGroup } from '@angular/forms'
import { LoginComponent } from '../login/login.component';

declare let alertify:any;
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

name!:string;
surName!:string;
email!:string;
password!:string;

  constructor(private alertifyService:AlertifyService,public router: Router,public formBuilder:FormBuilder) { }


  ngOnInit(): void {
  }
  registerUser(){

  if(this.name!=null&&this.surName!=null&&this.email!=null&&this.password!=null){
      alertify.alert('Alert Title', 'Hoşgeldiniz '+this.name+" "+this.surName );
      this.router.navigate(['login'])

  }else{
      alertify.alert('Alert Title', 'Lütfen bilgilerinizi eksiksiz giriniz');
  }

}

}
