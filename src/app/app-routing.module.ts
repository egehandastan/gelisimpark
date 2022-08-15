import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import {LoginComponent} from './login/login.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
 {path:'login',component:LoginComponent},
 {path:'',component:ToolBarComponent, pathMatch:'full'},
 {path:'register',component:RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
