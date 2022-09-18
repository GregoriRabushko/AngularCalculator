import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-template-header',
  templateUrl: './template-header.component.html',
  styleUrls: ['./template-header.component.scss']
})
export class TemplateHeaderComponent implements OnInit {

  menuActive = false;

  objActiveButton:any = {
    activeButtonHistory: false,
    activeButtonSchematic: false,
    activeButtonCalculate: true,
  }

  constructor() { }

  ngOnInit(): void {
  }

  @Output() activeButtonHeader = new EventEmitter<any> ();
    activeButtonEmitter (value:any) {
      this.activeButtonHeader.emit(value);
    }

  @Output() activeAuthorizationUsers = new EventEmitter<boolean> ();
  AuthorizationUsers (value:boolean) {
    console.log(value);
    this.activeAuthorizationUsers.emit(value);
  }

  buttonActiveHistory() {
      this.objActiveButton.activeButtonHistory = true;
      this.objActiveButton.activeButtonSchematic = false;
      this.objActiveButton.activeButtonCalculate = false;
      this.activeButtonEmitter(this.objActiveButton);

  }

  buttonActiveSchematic() {
    this.objActiveButton.activeButtonHistory = false;
    this.objActiveButton.activeButtonSchematic = true;
    this.objActiveButton.activeButtonCalculate = false;
    this.activeButtonEmitter(this.objActiveButton);
  }

  buttonActiveCalculate() {
    this.objActiveButton.activeButtonHistory = false;
    this.objActiveButton.activeButtonSchematic = false;
    this.objActiveButton.activeButtonCalculate = true;
    this.activeButtonEmitter(this.objActiveButton);
  }
}
