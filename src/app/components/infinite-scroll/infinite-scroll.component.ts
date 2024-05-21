import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Store } from '@ngrx/store';
import * as PokemonActions from '../../store/pokemon';
import { ItemGridComponent } from '../item-grid/item-grid.component';
import { Subject, takeUntil } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { CustomButtonDirective } from '../../shared/directives';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-infinite-scroll',
  standalone: true,
  imports: [CommonModule, ScrollingModule, ItemGridComponent, CustomButtonDirective],
  templateUrl: './infinite-scroll.component.html',
  styleUrl: './infinite-scroll.component.scss'
})
export class InfiniteScrollComponent {
  items: any = [];
  private pageSize = 20;
  private pageNumber = 0;
  loading = false;
  queryParams = {};

  destroyed$ = new Subject<boolean>();

  constructor(
    private store: Store<{ pokemon: any }>,
    updates$: Actions,
    private _route: ActivatedRoute
  ) {
    updates$.pipe(
      ofType(PokemonActions.GET_POKEMONS_SUCCESSFULLY),
      takeUntil(this.destroyed$)
    )
      .subscribe((res: any) => {
        this.items = [...this.items, ...res.payload.data]
        this.pageNumber++;
        this.loading = false;
      });
  }

  ngOnInit(): void {

    this._route.queryParams.subscribe((params) => {
      if (Object.keys(params).length !== 0) {
        let newQueryParams = {
          pageNumber: this.pageNumber,
          pageSize: this.pageSize,
          numberType: params['sortNumber'],
          sortType: params['sort'],
          filterType: params['filterType']
        }
        if (this.hasObjectChanged(newQueryParams, this.queryParams)) {
          this.queryParams = newQueryParams
          this.items = []
          this.pageNumber = 0
          this.store.dispatch(PokemonActions.getPokemons({ ...this.queryParams, pageNumber: 0 }))
        }
        
      }
      else {
        this.items = []
        this.pageNumber = 0
        this.loadMore();
      }
    });
    
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  loadMore(): void {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.store.dispatch(PokemonActions.getPokemons({...this.queryParams, pageNumber: this.pageNumber, pageSize: this.pageSize }))

  }

  hasObjectChanged(original: any, edited: any) {
    for (let key in original) {
        if (original.hasOwnProperty(key) && original[key] !== edited[key]) {
            return true;
        }
    }
    return false;
}


}
