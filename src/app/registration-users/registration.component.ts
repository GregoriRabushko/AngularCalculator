import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registration-users',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @Output() registration = new EventEmitter<boolean>();
  registrationModel (model: boolean) {
    this.registration.emit(model);
  }

  constructor() { }
  ngOnInit(): void {
  }
}
