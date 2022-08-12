import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  constructor(public router: Router){}

  ngOnInit(): void {



  }
  onLogin(): void{
      this.router.navigate(['login'])

  }
  onRegister(): void{
       this.router.navigate(['register'])
  }
}
