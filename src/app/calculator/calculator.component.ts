import { Component, OnInit } from '@angular/core';
import {CalculatorService} from "./calculator.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  numberEnter = '';

  constructor(private readonly calculationService: CalculatorService) { }

  ngOnInit(): void {
  }

  deleteLastSymbolInput(): void {
    const charString = this.numberEnter.split('');
    charString.pop();
    this.numberEnter = charString.join('');
  }

  addSymbol(char: string): void {
    this.numberEnter += char;
  }

  calculate() {
    this.numberEnter = this.calculationService.calculate(this.numberEnter).toString(10);
    // displayHistory(this.numberEnter);
  }
}
