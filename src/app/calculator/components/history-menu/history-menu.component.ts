import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  OnInit, QueryList,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'app-history-menu',
  templateUrl: './history-menu.component.html',
  styleUrls: ['./history-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})


export class HistoryMenuComponent implements OnInit, AfterViewInit {
  @Input() historyExample!: string

  @ContentChild('divContent', {static: true, read: ElementRef}) contentDiv!: ElementRef;
  @ContentChildren('divContent', {read: ElementRef}) contentCh!: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
    this.contentDiv.nativeElement.style.color = 'red';
    console.log(this.contentCh);
  }

  ngAfterViewInit(): void {
    console.log(this.contentCh);
  }
}
