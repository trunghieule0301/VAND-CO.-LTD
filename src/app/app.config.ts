import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { StoreModule, provideStore } from '@ngrx/store';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { pokemonReducer } from './store/pokemon/pokemon.reducer';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { PokemonEffects } from './store/pokemon/pokemon.effects';
import { IMAGE_CONFIG } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(withFetch()),
    // importProvidersFrom(
    // // NgxsModule.forRoot([ /* Enter your state here */], {
    // //   developmentMode: !environment.production,
    //   // })
    //   StoreModule.forRoot({ pokemon: pokemonReducer })
    // ),
    provideStore({
      pokemon: pokemonReducer,
    }),
    provideEffects([PokemonEffects]),
    provideClientHydration(),
    provideEffects(),
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true
      }
    }
]
};
