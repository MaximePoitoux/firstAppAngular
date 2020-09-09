import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') myBackgroundColor:string;
  @HostBinding('style.color') color:string;
  @HostBinding('style.padding') newPadding:string;

  @HostListener('mouseover') mouseOver (eventData:Event) {
    this.myBackgroundColor = 'purple'; 
    this.color = 'yellow';
    this.newPadding = '20px';
  }

  @HostListener('mouseout') mouseOut (eventData:Event) {
    this.myBackgroundColor = 'transparent'; 
    this.color = 'white';
  }
}
