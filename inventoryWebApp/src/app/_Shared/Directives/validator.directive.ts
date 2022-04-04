import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appValidator]'
})
export class ValidatorDirective {

  @Input() inputValue: any; //gets the input field value
  @Input() submitted: boolean | undefined; // check whether form is submitted

  constructor(
    private elemRef: ElementRef,
    private renderer: Renderer2
  ) {
  }

  // listens on blur of the input field
  @HostListener('blur')
  checkValidation() {
    //check if the input field is empty
    if((this.inputValue == '' || this.inputValue == null || this.inputValue == undefined)) {
      this.renderer.addClass(this.elemRef.nativeElement, 'error-fields');
    } else {
      this.renderer.removeChild(this.elemRef.nativeElement, 'error-fields');
    }
  }
}
