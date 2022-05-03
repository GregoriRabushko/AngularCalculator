import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 5;
  currency = 'BYN'
  someArray = ['BYN', 'RUR', 'USD']
}
