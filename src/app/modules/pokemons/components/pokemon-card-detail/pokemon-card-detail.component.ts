import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card-detail',
  templateUrl: './pokemon-card-detail.component.html',
  styleUrls: ['./pokemon-card-detail.component.scss']
})
export class PokemonCardDetailComponent implements OnInit {

  @Input() pokemon!: Pokemon;

  constructor() { }

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
