import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as PokemonActions from '../../store/pokemon/pokemon.actions';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { CardItemComponent } from '../../components/card-item/card-item.component';
import { CommonModule } from '@angular/common';
import { CustomButtonDirective } from '../../shared/directives';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, CardItemComponent, FooterComponent, CustomButtonDirective, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  pokemonInfoList!: any;
  spriteById = null;
  types = [];
  
  constructor(private store: Store<{ pokemon: any }>) { }
  
  ngOnInit() {
    this.store.dispatch(PokemonActions.getPokemons({ pageNumber: 1, pageSize: 9, sortType: 'number' }))
    this.store.dispatch(PokemonActions.getPokemonTypes())

    this.store.select('pokemon').subscribe(item => {
      this.pokemonInfoList = item.list
      this.spriteById = item.spriteById
      this.types = item.types
    })
  }
}
