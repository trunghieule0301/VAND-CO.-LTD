import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPokemonTypes } from '../../store/pokemon/pokemon.selectors';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  @Output() filterChange = new EventEmitter<string>();
  @Input() selectedFilter!: number;

  categories = [] as any;

  constructor( private store: Store<{ pokemon: any }>) { }

  ngOnInit() {
    this.store.select(selectPokemonTypes).subscribe(item => { this.categories = item })
  }

  onFilterChange(category: any) {
    this.filterChange.emit(category.id);
  }
}
