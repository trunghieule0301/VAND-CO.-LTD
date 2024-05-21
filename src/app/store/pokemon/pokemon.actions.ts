import { createAction, props } from '@ngrx/store';

export const GET_POKEMONS = '[Pokemons Component] Get'
export const GET_POKEMONS_SUCCESSFULLY = '[Pokemons Component] Get Successfully'
export const GET_POKEMONS_FAILED = '[Pokemons Component] Get Failed'
export const GET_POKEMON_DETAIL = '[Pokemon Detail Component] Get'
export const GET_POKEMON_DETAIL_SUCCESSFULLY = '[Pokemon Detail Component] Get Successfully'
export const GET_POKEMON_DETAIL_FAILED = '[Pokemon Detail Component] Get Failed'
export const GET_POKEMON_TYPES = '[Pokemon Type Component] Get'
export const GET_POKEMON_TYPES_SUCCESSFULLY = '[Pokemon Type Component] Get Successfully'
export const GET_POKEMON_TYPES_FAILED = '[Pokemon Type Component] Get Failed'
export const GET_POKEMON_SPRITE = '[Pokemon Sprite Component] Get'
export const GET_POKEMON_SPRITE_SUCCESSFULLY = '[Pokemon Sprite Component] Get Successfully'
export const GET_POKEMON_SPRITE_FAILED = '[Pokemon Sprite Component] Get Failed'

export const getPokemons = createAction(GET_POKEMONS, props<{ pageNumber?: number; pageSize?: number; numberType?: string; sortType?: string; filterType?:number }>());
export const getPokemonsSuccessfully = createAction(GET_POKEMONS_SUCCESSFULLY, props<{ payload: any; }>());
export const getPokemonsFailed = createAction(GET_POKEMONS_FAILED);
export const getPokemonDetail = createAction(GET_POKEMON_DETAIL,  props<{ id: string; }>());
export const getPokemonDetailSuccessfully = createAction(GET_POKEMON_DETAIL_SUCCESSFULLY, props<{ payload: any; }>());
export const getPokemonDetailFailed = createAction(GET_POKEMON_DETAIL_FAILED);
export const getPokemonTypes = createAction(GET_POKEMON_TYPES);
export const getPokemonTypesSuccessfully = createAction(GET_POKEMON_TYPES_SUCCESSFULLY, props<{ payload: any; }>());
export const getPokemonTypesFailed = createAction(GET_POKEMON_TYPES_FAILED);
export const getPokemonSprite = createAction(GET_POKEMON_SPRITE,  props<{ id: string; }>());
export const getPokemonSpriteSuccessfully = createAction(GET_POKEMON_SPRITE_SUCCESSFULLY, props<{ payload: any; }>());
export const getPokemonSpriteFailed = createAction(GET_POKEMON_SPRITE_FAILED);