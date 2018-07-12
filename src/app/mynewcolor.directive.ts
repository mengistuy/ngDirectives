import { Directive, HostListener, ElementRef, Renderer2, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Directive({
  selector: '[appMynewcolor]'
})
export class MynewcolorDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }
  toggleFlag = false;
  @Input() toggleColor;
  @Output() myOutputcolor = new EventEmitter();

  @HostListener('click', ['$event'])
  changeMyColor() {
    console.log(' before change ' + this.toggleColor);
    this.toggleFlag = (this.toggleFlag === true) ? false : true;
    this.toggleColor = (this.toggleColor === 'red') ? 'blue' : 'red';
    console.log(this.toggleColor);
    if (this.toggleFlag) {
      this.renderer.setStyle(this.element.nativeElement, 'color', this.toggleColor);
      this.renderer.setStyle(this.element.nativeElement, 'font-size', '40px');
    } else {
      this.renderer.removeStyle(this.element.nativeElement, 'red');
      this.renderer.removeStyle(this.element.nativeElement, 'font-size');
    }
    this.myOutputcolor.emit(this.toggleColor);
  }
}
