import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatesComponent } from './templates/templates.component';
import { TemplateHeaderComponent } from './template-header/template-header.component';
import { TemplateBodyComponent } from './template-body/template-body.component';
import { HeaderHistoryComponent } from './template-body/header-history/header-history.component';
import { HeaderSchematicComponent } from './template-body/header-schematic/header-schematic.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    TemplateHeaderComponent,
    TemplateBodyComponent,
    HeaderHistoryComponent,
    HeaderSchematicComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
