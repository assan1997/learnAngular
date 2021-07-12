import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomAtributeDirective]'
})
export class CustomAtributeDirectiveDirective {

  @HostBinding('style.width') width:any
  @HostBinding('style.height') height:any
  @HostBinding('style.transition') transition = "all ease-in-out .3s"

  incrementValue = 30

  interval :any
 
  constructor() { }
  
  @HostListener('mouseover') mouseenter(){
    
    this.handleSize("inc")
  }

  @HostListener('mouseout') mouseout(){
    
    this.handleSize("desc")
 }
  handleSize(arg:any){

    clearInterval(this.interval)

      this.interval = setInterval(()=>{

        arg === "inc"? this.width = `${this.incrementValue+=1}px` : this.width = `${this.incrementValue-=1}px`
        arg === "inc"? this.height = `${this.incrementValue+=1}px` : this.height = `${this.incrementValue-=1}px`
        this.incrementValue+=this.incrementValue

    },100)
  }
}
