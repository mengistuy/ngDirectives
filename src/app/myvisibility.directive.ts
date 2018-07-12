import { Directive, ElementRef, Renderer2, OnInit, Input , HostListener } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
  toggleFlag = true;
  constructor(private elem: ElementRef, private renderer: Renderer2) {
       this.elem.nativeElement.style.color = 'red';
   }
   @HostListener('click')
   showOrHideElement() {
    this.toggleFlag = (this.toggleFlag === true) ? false : true;
     console.log(this.toggleFlag);
    if (this.toggleFlag === true) {
      this.elem.nativeElement.children[1].style.display = 'block';
    } else {
      this.elem.nativeElement.children[1].style.display = 'none';
    }
   }

  // export class MyvisibilityDirective implements OnInit {
  //   // @Input() myBoolVal;
  //     constructor(private elem: ElementRef, private renderer: Renderer2) {
  //    //  this.elem.nativeElement.style.dispaly = 'none';
  //    //  this.renderer.setStyle(this.elem.nativeElement , ' dispaly ', ' none ');
  //     //  this.elem.nativeElement.style.color = 'black';
  //       this.elem.nativeElement.backgroundColor = 'black';
  //      }

  //       ngOnInit() {
  //      //   this.renderer.setStyle(this.elem.nativeElement , ' dispaly ', ' none ');
  //         this.elem.nativeElement.backgroundColor = 'black';
  //      //   if (this.myBoolVal === false) {
  //     //      this.elem.nativeElement.style.dispaly = 'none'; // option1
  //     //      this.renderer.setStyle(this.elem.nativeElement , ' dispaly ', ' none ');
  //           // this.elem.nativeElement.querySelector('.hidden'); // option2
  //     //    }
  //     }

}
