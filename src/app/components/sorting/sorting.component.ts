import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sorting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sorting.component.html',
  styleUrl: './sorting.component.scss'
})
export class SortingComponent {
  @Input() selectedSort: string = '';
  @Output() sortChange = new EventEmitter<string>();

  sortOptions = [
    { type: 'total', name: 'Total: low to high' },
    { type: '-total', name: 'Total: high to low' },
    { type: 'hp', name: 'Hp: low to high' },
    { type: '-hp', name: 'Hp: high to low' },
    { type: 'attack', name: 'Attack: low to high' },
    { type: '-attack', name: 'Attack: high to low' },
    { type: 'defense', name: 'Defense: low to high' },
    { type: '-defense', name: 'Defense: high to low' },
    { type: 'sp_atk', name: 'Sp. Attack: low to high' },
    { type: '-sp_atk', name: 'Sp. Attack: high to low' },
    { type: 'sp_def', name: 'Sp. Defense: low to high' },
    { type: '-sp_def', name: 'Sp. Defense: high to low' },
    { type: 'speed', name: 'Speed: low to high' },
    { type: '-speed', name: 'Speed: high to low' },
  ];

  onSortChange(sort: any) {
    this.sortChange.emit(sort.target.value);
  }
}
