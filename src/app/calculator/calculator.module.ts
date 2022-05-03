import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalculatorComponent} from "./calculator.component";
import {CalculatorService} from "./calculator.service";
import { InputButtonComponent } from './components/input-button/input-button.component';
import {FormsModule} from "@angular/forms";
import { HistoryMenuComponent } from './components/history-menu/history-menu.component';
import { CalculatorOutputPipe } from './calculator-output.pipe';


@NgModule({
  declarations: [CalculatorComponent, InputButtonComponent, HistoryMenuComponent, CalculatorOutputPipe],
  providers: [CalculatorService],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CalculatorComponent]
})
export class CalculatorModule {}
