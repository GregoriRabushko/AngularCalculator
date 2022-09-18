import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-authorization-users',
  templateUrl: './authorization-users.component.html',
  styleUrls: ['./authorization-users.component.scss']
})
export class AuthorizationUsersComponent implements OnInit {

  showAuthorizationUsers = true;
  showRegistrationUsers = false;

  @Output() activeButtonCome = new EventEmitter<boolean> ();
  hideAuthorizationUsers (value:boolean) {
    this.showAuthorizationUsers = false;
    this.showRegistrationUsers = false;
    this.activeButtonCome.emit(value);
  }


  constructor() {}

  ngOnInit(): void {
  }

  inputOnRegistration() {
    this.showRegistrationUsers = true;
    this.showAuthorizationUsers = false;
  }

  registrationSuccessful (value:boolean) {
    if (value) {
      this.showAuthorizationUsers = true;
      this.showRegistrationUsers = false;
    }
  }
}
