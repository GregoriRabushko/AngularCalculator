import {
  AfterContentInit,
  Component,
  ContentChildren, Input,
  OnInit,
  QueryList,
  TemplateRef
} from '@angular/core';
import {TemplateTypeDirective} from "../template-type.directive";

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit, AfterContentInit {
  templateHeader!: TemplateRef<TemplateTypeDirective>;
  templateBody!: TemplateRef<TemplateTypeDirective>;
  templateFooter!: TemplateRef<TemplateTypeDirective>;

  @Input() items: any = [];

  @ContentChildren(TemplateTypeDirective, {read: TemplateTypeDirective}) templates!: QueryList<TemplateTypeDirective>;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.templates.forEach(t => {
      switch (t.getType()) {
        case 'header':
          this.templateHeader = t.getTemplate();
          break;
        case 'body':
          this.templateBody = t.getTemplate();
          break;
        case 'footer':
          this.templateFooter = t.getTemplate();
          break;
      }
    })
  }
}
