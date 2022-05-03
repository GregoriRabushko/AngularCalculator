import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.scss']
})
export class InputButtonComponent implements OnInit {
  @Input() buttonText!: string;
  buttonClasses!: string[];
  @Input() set buttonType(type: string) {
    switch (type) {
      case 'operatorButton': this.buttonClasses = ['operatorsButton']; break;
      case 'positiveNegativeButton': this.buttonClasses = ['operatorsButton', 'operatorsButtonTrueOrFalse']; break;
      default: this.buttonClasses = []; break;
    }
  }
  @Output() addSymbol = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  processButtonClick() {
    this.addSymbol.emit(this.buttonText);
  }
}
