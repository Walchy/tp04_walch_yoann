import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appControlPascalCase]'
})
export class ControlPascalCaseDirective {
  @Input() data:string;

  constructor() { }

  @HostListener('focusout') onFocusOut(){
    if(this.data.charAt(0) !== this.data.charAt(0).toUpperCase()) {
      alert('Le nom et le prénom doivent commencer par une majuscule.');
    }
  }
}
