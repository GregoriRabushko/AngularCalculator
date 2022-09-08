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

  activeButtonCome () {
    this.activeEnter = true;
    this.showOrHideInput = false;

  }
}

