import { Routes } from '@angular/router';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { PokemonResolver } from './resolvers/pokemon.resolver';

export const routes: Routes = [
  {
    path: '',
    component: PokemonsComponent
  },
  {
    path: ':id',
    resolve: {
      pokemon: PokemonResolver
    },
    component: PokemonDetailComponent
  },
];
