import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import * as PokemonActions from './pokemon.actions';
import { ApiService } from '../../services/api.service';

@Injectable()
export class PokemonEffects {

    constructor(
        private actions$: Actions,
        private pokemonService: ApiService
    ) { }
    
    loadPokemon$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PokemonActions.GET_POKEMONS),
            exhaustMap((action) => this.pokemonService.getAll(action)
                .pipe(
                    map(pokemons => ({ type: PokemonActions.GET_POKEMONS_SUCCESSFULLY, payload: pokemons })),
                    catchError(() => of({ type: PokemonActions.GET_POKEMONS_FAILED }))
                )
            )
        )
    );

    loadPokemonById$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PokemonActions.GET_POKEMON_DETAIL),
            exhaustMap((action) => this.pokemonService.getDetailById(action)
                .pipe(
                    map(pokemon => ({ type: PokemonActions.GET_POKEMON_DETAIL_SUCCESSFULLY, payload: pokemon })),
                    catchError(() => of({ type: PokemonActions.GET_POKEMON_DETAIL_FAILED }))
                )
            )
        )
    );

    loadPokemonTypes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PokemonActions.GET_POKEMON_TYPES),
            exhaustMap(() => this.pokemonService.getAllTypes()
                .pipe(
                    map(types => ({ type: PokemonActions.GET_POKEMON_TYPES_SUCCESSFULLY, payload: types })),
                    catchError(() => of({ type: PokemonActions.GET_POKEMON_TYPES_FAILED }))
                )
            )
        )
    );

    loadPokemonSpriteById$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PokemonActions.GET_POKEMON_SPRITE),
            exhaustMap((action) => this.pokemonService.getSpriteById(action)
                .pipe(
                    map(sprite => ({ type: PokemonActions.GET_POKEMON_SPRITE_SUCCESSFULLY, payload: sprite })),
                    catchError(() => of({ type: PokemonActions.GET_POKEMON_SPRITE_FAILED }))
                )
            )
        )
    );

}