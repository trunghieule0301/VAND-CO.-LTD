import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardItemComponent } from '../card-item/card-item.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-item-grid',
  standalone: true,
  imports: [CommonModule, CardItemComponent],
  templateUrl: './item-grid.component.html',
  styleUrl: './item-grid.component.scss'
})
export class ItemGridComponent {
  @Input() pokemonInfoList: any;
  spriteById = null;
  types = [];

  constructor(private store: Store<{ pokemon: any }>) {
    this.store.select('pokemon').subscribe(item => {
      this.spriteById = item.spriteById
      this.types = item.types
    })
  }
  
}
