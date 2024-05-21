import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from '../../components/filters/filters.component';
import { SortingComponent } from '../../components/sorting/sorting.component';
import { ItemGridComponent } from '../../components/item-grid/item-grid.component';
import { Store } from '@ngrx/store';
import * as PokemonActions from '../../store/pokemon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NumberSortingComponent } from '../../components/number-sorting/number-sorting.component';
import { InfiniteScrollComponent } from '../../components/infinite-scroll/infinite-scroll.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, BannerComponent, FiltersComponent, SortingComponent, ItemGridComponent, RouterModule, NumberSortingComponent, InfiniteScrollComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  selectedFilter!: number;
  selectedNumberSort!: string;
  selectedSort!: string;

  constructor(
    private store: Store<{ pokemon: any }>,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  filteredProducts: any[] = [];

  ngOnInit() {
    this.store.dispatch(PokemonActions.getPokemonTypes())

    this._route.queryParams.subscribe((params) => {
      this.selectedFilter = Number(params['filterType'])
      this.selectedSort = params['sort']
      this.selectedNumberSort = params['sortNumber']
    })
  }

  onFilterChange(categoryId: string) {
    this.addQueryParam('filterType', categoryId);
  }

  onSortChange(sortType: string) {
    this.addQueryParam('sort', sortType);
  }

  onSortNumberChange(sortType: string) {
    this.addQueryParam('sortNumber', sortType);
  }

  addQueryParam(key: string, value: string): void {
    // Get current query parameters
    let queryParams = { ...this._route.snapshot.queryParams };
    
    // Add/Update the query parameter
    queryParams[key] = value;
    
    // Navigate with the updated query parameters
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: queryParams,
      queryParamsHandling: 'merge' // merge to keep existing query params
    });
  }


}