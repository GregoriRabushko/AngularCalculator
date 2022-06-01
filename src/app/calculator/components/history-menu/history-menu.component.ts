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
  @Input() task!: string
  @Input() answer!: string

  condition: boolean = true;

  arrWithContentExample = [{task:'100/20', answer:'5'},{task:'400/2', answer:'200'},{task:'99+1', answer:'100'}];

  @ContentChild('divContent', {static: true, read: ElementRef}) contentDiv!: ElementRef;
  @ContentChildren('divContent', {read: ElementRef}) contentCh!: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
    this.contentDiv.nativeElement.style.color = 'red';
    console.log(this.contentCh);
    console.log(this.arrWithContentExample);
  }

  ngAfterViewInit(): void {
    console.log(this.contentCh);
  }

  clearHistoryButton(): void {
    this.arrWithContentExample = [];
    this.condition = false;
    console.log(this.arrWithContentExample);
  }
}
