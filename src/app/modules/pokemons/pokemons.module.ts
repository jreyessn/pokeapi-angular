import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { RouterModule } from '@angular/router';
import { routes } from './pokemons.routing';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsService } from './services/pokemons.service';
import { ControlNavigationComponent } from './components/control-navigation/control-navigation.component';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { PokemonCardDetailComponent } from './components/pokemon-card-detail/pokemon-card-detail.component';
import { PokemonResolver } from './resolvers/pokemon.resolver';

@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonCardComponent,
    ControlNavigationComponent,
    PokemonDetailComponent,
    PokemonCardDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    PokemonsService,
    PokemonResolver
  ]
})
export class PokemonsModule { }
