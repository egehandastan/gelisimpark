import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { Login } from './login';
declare let alertify:any;
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  users:Login[] = [
  {user_id: 1, email: "Admin", password: "admin123"},
  {user_id: 1, email: "Admin2", password: "admin123"},
  {user_id: 1, email: "Admin3", password: "admin"},
  ]
  email:string = "";
  password:string = "";
  i:number = 0;
  constructor(public router: Router, private alertifyService:AlertifyService) { }

  ngOnInit(): void {
  }

  LoginUser(){
  for(this.i = 0;this.users.length;this.i++){
     if(this.email == this.users[this.i].email && this.password == this.users[this.i].password) {
             this.router.navigate(['app-tab-group']);
             this.loggedInAlert();
             return;
     }
     if(this.email == "" && this.password == "") {
             this.loggedInEmpty();
             return;
     }
     if (this.email == this.users[this.i].email || this.password == this.users[this.i].password){
             this.loggedInError();
             return;
     }
     if(!(this.email == this.users[this.i].email && this.password == this.users[this.i].password)) {
             this.loggedInNA();
             return;
     }
  }

  }

  loggedInAlert(){
           alertify.notify("Giriş Yapıldı.");
  }
  loggedInEmpty(){
             alertify.notify("Email ve şifre girilmemiş.");
    }
  loggedInError(){
           alertify.notify("Email veya şifre yanlış.");
  }
  loggedInNA(){
             alertify.notify("Bu email sistemde kayıtlı değil.");
    }
}
