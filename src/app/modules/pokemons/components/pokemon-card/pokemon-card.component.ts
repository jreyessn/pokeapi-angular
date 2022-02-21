import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonNamesResource } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemonResource!: PokemonNamesResource;

  constructor() { }

  get pokemon(): Pokemon {
    return this.pokemonResource.detail
  }

  get profilePic(): string {
    return this.pokemon.sprites.other.dream_world.front_default
  }

  get ability(): string {
    return this.pokemon.abilities[0].ability.name
  }

  get abilityHidden(): string {
    return this.pokemon.abilities[1]?.ability?.name ?? '-'
  }

  get typeFirst(): string {
    return this.pokemon.types[0].type.name
  }

  ngOnInit(): void {
  }

}
