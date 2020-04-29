import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Page1Component } from './page1/page1.component';
import{Routes ,RouterModule} from '@angular/router';

const Routes:Routes = [
  {path:'page1/:hasil' , component:Page1Component},
]
@NgModule({
  imports:      [ BrowserModule, FormsModule ,RouterModule.forRoot(Routes)],
  declarations: [ AppComponent, HelloComponent, Page1Component],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
