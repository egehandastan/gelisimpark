import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CardsComponent } from './cards/cards.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { NestedNodeComponent } from './nested-node/nested-node.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AccordionModule} from 'primeng/accordion';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductFilterPipe } from './search-bar/product-filter.pipe';
import { Cards } from './cards/cards';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    TabGroupComponent,
    ToolBarComponent,
    CardsComponent,
    NestedNodeComponent,
    LoginComponent,
    RegisterComponent,
    SearchBarComponent,
    ProductFilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatTreeModule,
    MatSidenavModule,
    MatMenuModule,
    MatSnackBarModule,
    MatButtonModule,
    AccordionModule,
    FormsModule,
    

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
