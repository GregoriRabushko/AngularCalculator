import {Component, Input, OnInit} from '@angular/core';
import {ServiceColculateService} from './service-colculate.service';

@Component({
  selector: 'app-template-body',
  templateUrl: './template-body.component.html',
  styleUrls: ['./template-body.component.scss']
})
export class TemplateBodyComponent implements OnInit {
  @Input() numberEnter:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  numberEnterInput(item:any){
    this.numberEnter += item;
    console.log(this.numberEnter);
  }

  deleteItem() {
    this.numberEnter = this.numberEnter.slice(0, this.numberEnter.length-1);
    console.log(`VOID NEXT: ${this.numberEnter}`);
  }

  clearInput() {
    this.numberEnter = '';
  }
}
