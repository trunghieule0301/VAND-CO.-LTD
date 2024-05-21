import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-number-sorting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './number-sorting.component.html',
  styleUrl: './number-sorting.component.scss'
})
export class NumberSortingComponent {
  @Input() selectedNumberSort: string = '';
  @Output() sortNumberChange = new EventEmitter<string>();

  sortOptions = [
    { type: 'number', name: 'Number: 0-9' },
    { type: '-number', name: 'Number: 9-0' },
  ];

  onSortChange(sort: any) {
    this.sortNumberChange.emit(sort.target.value);
  }
}
