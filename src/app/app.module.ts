import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatesComponent } from './templates/templates.component';
import { TemplateTypeDirective } from './template-type.directive';
import { DummyDirective } from './templates/dummy.directive';
import { TestObservablesComponent } from './test-observables/test-observables.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    TemplateTypeDirective,
    DummyDirective,
    TestObservablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
