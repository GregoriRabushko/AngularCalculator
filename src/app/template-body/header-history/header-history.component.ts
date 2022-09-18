import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-header-history',
  templateUrl: './header-history.component.html',
  styleUrls: ['./header-history.component.scss']
})
export class HeaderHistoryComponent implements OnInit {
  @Input() arrWithObjTask:any[] = [];
  showOrHideTableHistory = false;

  constructor() { }
  ngOnInit(): void {}

  showOrHideHistoryTable () {
    this.showOrHideTableHistory = !this.showOrHideTableHistory;
  }



}
