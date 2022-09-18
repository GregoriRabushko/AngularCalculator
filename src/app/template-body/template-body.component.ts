import {Component,OnInit} from '@angular/core';
import {ServiceColculateService} from './service-colculate.service';

@Component({
  selector: 'app-template-body',
  templateUrl: './template-body.component.html',
  styleUrls: ['./template-body.component.scss']
})
export class TemplateBodyComponent implements OnInit {
  numberEnter:string = '';
  minHistoryTask = '';
  arrNumber:any[] = [];

  activeButtonHistory:boolean = false;
  activeButtonSchematic:boolean = false;
  activeButtonCalculate:boolean = true;

  constructor(private readonly calculationService: ServiceColculateService) { }

  ngOnInit(): void {
  }

  addSymbol(item:any){
    this.numberEnter += item;
  }

  deleteItem() {
    this.numberEnter = this.numberEnter.slice(0, this.numberEnter.length-1);
    console.log(`VOID NEXT: ${this.numberEnter}`);
  }

  clearInput() {
    this.numberEnter = '';
  }

  calculate() {
    const result = this.calculationService.calculate(this.numberEnter).toString(10);
    const historyRecord={
      task: this.numberEnter,
      answer: result
    };

    this.numberEnter = result;
    this.arrNumber = [...this.arrNumber, historyRecord];

    this.minHistoryTask = historyRecord.task;
  }

  activeButtonHeader (value:any) {
    this.activeButtonHistory = value.activeButtonHistory;
    this.activeButtonSchematic = value.activeButtonSchematic;
    this.activeButtonCalculate = value.activeButtonCalculate;
  }
}

