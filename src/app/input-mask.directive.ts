import { Directive, HostListener, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appInputMask]'
})
export class InputMaskDirective implements OnInit {

  @Input('appInputMask') inputMask: string;
  regExpMask : RegExp

  constructor(readonly el: ElementRef) {
    
   }

   ngOnInit(): void {
    this.regExpMask = new RegExp(this.inputMask);
   }

  @HostListener('input', ['$event'])
  onInput(e: any) {
  
    if (!this.regExpMask.test(this.el.nativeElement.value)) {
      this.el.nativeElement.value = null;
    }
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(e: KeyboardEvent) {


    const selectedText = this.el.nativeElement.selectionStart === this.el.nativeElement.selectionEnd;
    const value = this.el.nativeElement.value ? this.el.nativeElement.value + e.key : e.key;

    if (selectedText  && this.regExpMask.test(value) === false)  {
        this.validateKeyPressInput(e,  ['Shift', 'ArrowRight', 'ArrowLeft', 'Backspace', 'Tab'] );
    }
  }

  validateKeyPressInput(e: KeyboardEvent, allowedKey: string[], include = true) {
   const bandera  = include  ? allowedKey.indexOf(e.key) === -1 : allowedKey.indexOf(e.key) !== -1;
   if ( bandera ) {
      e.preventDefault();
    }
  }

  

}
