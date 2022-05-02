import {Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef} from '@angular/core';

export type TemplateType = 'header' | 'body' | 'footer';

@Directive({
  selector: '[appTemplateType]'
})
export class TemplateTypeDirective {
  @Input() type!: TemplateType;

  constructor(
    private readonly template: TemplateRef<any>,
  ) { }

  getTemplate(): TemplateRef<any> {
    return this.template;
  }
}
