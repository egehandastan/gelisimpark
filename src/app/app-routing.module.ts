import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';

import { TabGroupComponent } from './tab-group/tab-group.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

const routes: Routes = [
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
