import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; //Машрутизация приложения
import { AppComponent } from './app.component';//Компонент приложения
import {FormsModule} from "@angular/forms";
import {CalculatorModule} from "./calculator/calculator.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
