import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appDummy]'
})
export class DummyDirective {
  @Input() colorEnter?: string;
  @Input() colorLeave?: string;

  @HostListener('mouseenter') mouseEnter() {
    this.elementRef.nativeElement.style.color = this.colorEnter ?? 'red';
  }
  @HostListener('mouseleave') mouseLeave() {
    this.elementRef.nativeElement.style.color = this.colorLeave ?? 'black';
  }
  constructor(private readonly elementRef: ElementRef) { }

}
