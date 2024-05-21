import { Directive, Renderer2, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomButton]',
  standalone: true
})
export class CustomButtonDirective {

  @Input('appCustomButton') set classNames(classes: string) {
    this.applyClasses(classes);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private applyClasses(classes: string) {
    const classList = classes.split(' ');
    classList.forEach(className => {
      this.renderer.addClass(this.el.nativeElement, className);
    });
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'hover');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'hover');
  }

  @HostListener('click') onClick() {
    // alert('Button clicked!');
  }

}
