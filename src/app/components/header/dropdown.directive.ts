import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elem: ElementRef) { }

  // private makeOpaque(opacity: string) {
  //   this.elem.nativeElement.style.opacity = opacity;
  // }

  // @HostListener('click') onMouseEnter() {
  //   this.makeOpaque('50%');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.makeOpaque('100%');
  // }
}
