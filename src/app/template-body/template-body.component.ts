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

  activeButtonHistory= false;
  activeButtonSchematic = false;
  activeButtonCalculate = true;
  showAuthorizationUsers = false;

  constructor(private readonly calculationService: ServiceColculateService) { }

  ngOnInit(): void {
  }

  addSymbol(item:any){
    this.numberEnter += item;
  }

  deleteItem() {
    this.numberEnter = this.numberEnter.slice(0, this.numberEnter.length-1);
  }

  clearInput() {
    this.numberEnter = '';
  }

  calculate() {
    const result = this.calculationService.calculate(this.numberEnter).toString(10);
    const historyRecord={
      taskValueToTable: this.numberEnter,
      time:this.getDataHistory(),
      answerValueToTable: result
    };

    this.numberEnter = result;
    this.arrNumber = [...this.arrNumber, historyRecord];

    this.minHistoryTask = historyRecord.taskValueToTable;
  }

  getDataHistory () {
    const currentData = new Date();

    let hours = currentData.getHours();
    let minutes = currentData.getMinutes();
    let seconds = currentData.getSeconds();

    return hours+':'+minutes+':'+seconds;
  }

  activeButtonHeader (value:any) {
    this.activeButtonHistory = value.activeButtonHistory;
    this.activeButtonSchematic = value.activeButtonSchematic;
    this.activeButtonCalculate = value.activeButtonCalculate;
  }

  activeAuthorizationUsers (value:boolean) {
    if(value){
      this.showAuthorizationUsers = true;
    }
    this.activeButtonHistory = false;
    this.activeButtonSchematic = false;
    this.activeButtonCalculate = false;
  }

  activeButtonCome (value:boolean) {
    if (value) {
      this.activeButtonHistory= false;
      this.activeButtonSchematic = false;
      this.activeButtonCalculate = true;
      this.showAuthorizationUsers = false;
    }
  }
}

