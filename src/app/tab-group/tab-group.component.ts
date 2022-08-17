
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent {
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;


  constructor(public router: Router){}

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }


  onLogOut(): void{
      this.router.navigate(['app-tool-bar'])

  }
}
