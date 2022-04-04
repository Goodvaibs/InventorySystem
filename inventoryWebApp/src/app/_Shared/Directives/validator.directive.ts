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
  @HostListener('keyup')
  checkValidation() {
    // if button is clicked then do not add the class
    if(!this.elemRef.nativeElement.classList.contains('btn')) {
      if((this.inputValue == '' || this.inputValue == null || this.inputValue == undefined) && this.submitted ) {
        this.renderer.addClass(this.elemRef.nativeElement, 'error-fields');
      } else {
        this.renderer.removeClass(this.elemRef.nativeElement, 'error-fields');
      }
    }
  }


  //Check on form submit
  @HostListener('click')
  onSubmit() {
    //if button is clicked check all the fields and add class
    if(this.elemRef.nativeElement.classList.contains('btn')) {
      let el = document.getElementsByClassName('form-error');
      for(let i=0; i<el.length; i++) {
        let check = el[i].getAttribute('ng-reflect-input-value')
        if(check === '' || check === null) {
          el[i].className += " error-fields";
        }
      }
    }
  }
}
