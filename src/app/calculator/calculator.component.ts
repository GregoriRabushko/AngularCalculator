import { Component, OnInit } from '@angular/core';
import {CalculatorService} from "./calculator.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  objFromTaskAndAnswer = { numberEnter : '', answer:''};
  // condition = true;
  // inputResultTrueOrFalse!: string;
  taskInput!:string;

  constructor(private readonly calculationService: CalculatorService) { }

  ngOnInit(): void {
  }

  // deleteLastSymbolInput(): void {
  //   const charString = this.numberEnter.split('');
  //   charString.pop();
  //   this.numberEnter = charString.join('');
  // }

  addSymbol(char: string): void {
    this.objFromTaskAndAnswer.numberEnter += char;
    console.log(this.objFromTaskAndAnswer.numberEnter, 'TASK')
    // this.condition = true ;

    this.taskInput = this.objFromTaskAndAnswer.numberEnter;

    // if(this.condition) {
    //   this.inputResultTrueOrFalse = this.objFromTaskAndAnswer.numberEnter;
    // }
  }

  calculate() {
    this.objFromTaskAndAnswer.answer = this.calculationService.calculate(this.objFromTaskAndAnswer.numberEnter).toString(10);
    // this.condition = false;
    console.log(this.objFromTaskAndAnswer.answer, 'ANSWER');

    this.objFromTaskAndAnswer.numberEnter = this.objFromTaskAndAnswer.answer;
    console.log(this.taskInput, 'taskInput');

    // if (!this.condition) {
    //   this.inputResultTrueOrFalse = this.objFromTaskAndAnswer.answer;
    // }
  }

  // inputEnterTrueOrFalse() {
  //   if(this.condition) {
  //     this.inputResultTrueOrFalse = this.obj.numberEnter;
  //   } else {
  //     this.inputResultTrueOrFalse = this.obj.resultCalculate;
  //   }
  // }
}
