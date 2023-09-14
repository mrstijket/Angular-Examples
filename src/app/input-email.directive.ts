import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputEmail]'
})
export class InputEmailDirective {

  @HostListener('focus') onFocus() {
    this.element.nativeElement.classList.add('bg-warning');
  }

  @HostListener('blur') onBlur() {
    this.element.nativeElement.classList.remove('bg-warning');

    let value: string = this.element.nativeElement.value;
    if (!value.includes('@')) {
      this.element.nativeElement.value = value.toLowerCase() + '@gmail.com';
    }
    if (value === '') {
      this.element.nativeElement.value = '';
    }
  }

  constructor(private element: ElementRef) { }

}
