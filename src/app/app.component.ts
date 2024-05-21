import { Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FooterComponent } from './layouts/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, FooterComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vand-project';
  @ViewChild('navbar', { read: ElementRef }) navbar?: ElementRef;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT,)
    private element: ElementRef
  ) { }
  ngAfterViewInit() {
    const navbar: HTMLElement = this.navbar?.nativeElement.children[0]

    this.renderer.listen('window', 'scroll', (event) => {
      const number = window.scrollY;
      if (number > 10 || window.pageYOffset > 10) {
        // add logic
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('navbar-background');
      } else {
        // remove logic
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('navbar-background');
      }
    });

  }
  
}
