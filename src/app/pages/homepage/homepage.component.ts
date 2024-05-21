import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { ListComponent } from '../../components/list/list.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, FooterComponent, ListComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
