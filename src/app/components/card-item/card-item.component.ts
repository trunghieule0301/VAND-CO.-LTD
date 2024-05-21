import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PopupService } from '../../services';
import { PopupComponent } from '../pop-up/pop-up.component';
import { CustomButtonDirective } from '../../shared/directives';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [CommonModule, CustomButtonDirective],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent {
  @Input() pokemon: any;
  @Input() types!: any[];
  @Input() spriteById!: any;
  @Input() themeColor: any;

  constructor(private popupService: PopupService) { }

  getBackgroundColor(): string {
    return `radial-gradient(circle at 50% 0%, ${this.themeColor} 36%, #ffffff 36%)`;
  }

  openPopup() {
    let type_1 = this.types.find(item => item.id === this.pokemon?.type_1)?.name
    let type_2 = this.types.find(item => item.id === this.pokemon?.type_2)?.name
    this.pokemon = { ...this.pokemon, type_1_name: type_1, type_2_name: type_2 }
    this.popupService.open(PopupComponent, { information: this.pokemon });
  }
}
