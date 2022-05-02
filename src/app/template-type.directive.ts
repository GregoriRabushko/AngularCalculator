import {Directive, Input, TemplateRef} from '@angular/core';

export type TemplateType = 'header' | 'body' | 'footer';

@Directive({
  selector: '[appTemplateType]'
})
export class TemplateTypeDirective {
  @Input() appTemplateType!: TemplateType;

  constructor(private readonly template: TemplateRef<any>) { }

  getType(): TemplateType {
    return this.appTemplateType;
  }

  getTemplate(): TemplateRef<any> {
    return this.template;
  }
}
