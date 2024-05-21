import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PopupService } from '../../services/pop-up.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as PokemonActions from './../../store/pokemon/pokemon.actions';
import { selectPokemonSprite } from '../../store/pokemon/pokemon.selectors';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})
export class PopupComponent {
  @Input() information?: any;
  @Input() types?: any;
  pokemonSprite: any;

  constructor(private popupService: PopupService, private store: Store<{ pokemon: any }>) { }

  ngOnInit() {
    this.store.dispatch(PokemonActions.getPokemonSprite({ id: this.information.id }))

    this.store.select(selectPokemonSprite).subscribe(item => { this.pokemonSprite = URL.createObjectURL(new Blob([item])) })
  }

  close() {
    this.popupService.close();
  }

}