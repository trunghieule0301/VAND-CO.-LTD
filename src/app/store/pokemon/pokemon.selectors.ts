import { createSelector } from '@ngrx/store';

export interface PokemonState {
  list: any[],
  detailById: null,
  isLoading: boolean,
  types: any[],
  spriteById: any
}

export interface AppState {
  pokemon: PokemonState;
}

export const selectPokemon = (state: AppState) => state.pokemon;

export const selectPokemonSprite = createSelector(
  selectPokemon,
  (state: PokemonState) => state.spriteById
);

export const selectPokemonTypes = createSelector(
  selectPokemon,
  (state: PokemonState) => state.types
);