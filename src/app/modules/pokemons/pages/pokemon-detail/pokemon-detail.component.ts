import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  public pokemon!: Pokemon;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { 
    this.pokemon = this.activatedRoute.snapshot.data['pokemon']
  }

  ngOnInit(): void {
  }

}
