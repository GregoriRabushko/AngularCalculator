import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'AngularCalculator';
  activeEnter:boolean = false;
  showOrHideInput:boolean = true;
  activeRegistration = false;


  activeButtonCome () {
    this.activeEnter = true;
    this.showOrHideInput = false;

  }

  inputOnRegistration() {
    this.showOrHideInput = false;
    this.activeRegistration = true;
  }

  activeButtonRegistration(booleanEvent:boolean) {
    this.showOrHideInput = booleanEvent;
    this.activeRegistration = !booleanEvent;
  }

  // onClock () {
  //   // setInterval((()=>''), 1000);
  //   const currentData = new Date();
  //  let hours = currentData.getHours();
  //  let minutes = currentData.getMinutes();
  //  let seconds = currentData.getSeconds();
  //
  //  return hours+':'+minutes+':'+seconds;
  // }


}

