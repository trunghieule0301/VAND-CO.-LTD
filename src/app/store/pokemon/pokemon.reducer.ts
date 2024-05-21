import { createReducer, on } from '@ngrx/store';
import * as PokemonActions from './pokemon.actions';

export interface State {
  list: any[],
  detailById: null,
  isLoading: boolean,
  types: any[],
  spriteById: any
}

export const initialState: State = {
  list: [],
  detailById: null,
  isLoading: false,
  types: [],
  spriteById: null
};

const _pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.getPokemons, (state) => {
      return {
        ...state,
        isLoading: true
      } 
  }),
  on(PokemonActions.getPokemonsSuccessfully, (state, action) => {
      return {
        ...state,
        list: action.payload.data,
        isLoading: false
      } 
  }),
  on(PokemonActions.getPokemonsFailed, (state) => {
      return {
        ...state,
        isLoading: false
      } 
  }),
  on(PokemonActions.getPokemonDetail, (state) => {
      return {
        ...state,
        isLoading: true
      } 
  }),
  on(PokemonActions.getPokemonDetailSuccessfully, (state, action) => {
      return {
        ...state,
        detailById: action.payload,
        isLoading: false
      } 
  }),
  on(PokemonActions.getPokemonDetailFailed, (state) => {
      return {
        ...state,
        isLoading: false
      } 
  }),
  on(PokemonActions.getPokemonTypes, (state) => {
      return {
        ...state,
        isLoading: true
      } 
  }),
  on(PokemonActions.getPokemonTypesSuccessfully, (state, action) => {
    // console.log('types', action.payload.data)
      return {
        ...state,
        types: action.payload.data,
        isLoading: false
      } 
  }),
  on(PokemonActions.getPokemonTypesFailed, (state) => {
      return {
        ...state,
        isLoading: false
      } 
  }),
  on(PokemonActions.getPokemonSprite, (state) => {
      return {
        ...state,
        isLoading: true
      } 
  }),
  on(PokemonActions.getPokemonSpriteSuccessfully, (state, action) => {
      return {
        ...state,
        spriteById: action.payload,
        isLoading: false
      } 
  }),
  on(PokemonActions.getPokemonSpriteFailed, (state) => {
      return {
        ...state,
        isLoading: false
      } 
  }),
);

export function pokemonReducer(state: any, action: any) {
  return _pokemonReducer(state, action)
}