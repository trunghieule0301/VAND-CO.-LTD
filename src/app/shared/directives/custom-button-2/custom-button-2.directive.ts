import { Directive, Renderer2, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appCustomButton2]',
  standalone: true
})
export class CustomButton2Directive {

  @Input() appCustomButton: string = ''; // To pass custom styles if needed

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px 20px');
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', '4px');
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#007bff');
    this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color 0.3s');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#0056b3');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#007bff');
  }

  @HostListener('click') onClick() {
    alert('Button clicked!');
  }

}
