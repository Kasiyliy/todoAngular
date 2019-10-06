import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  el: ElementRef;
  defaultColor = 'yellow';

  constructor(el: ElementRef) {
    this.el = el;
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input() color: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.color) {
      this.highlight(this.defaultColor);
    } else {
      this.highlight(this.color);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
