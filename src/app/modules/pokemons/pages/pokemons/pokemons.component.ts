import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, Observable, of, tap } from 'rxjs';
import { PokemonNamesResource, PokemonPagination, PokemonResource } from '../../interfaces/pokemon.interface';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  public title: string = "Pokemones"

  public total: number = 0;

  public pokemonResources$: Observable<PokemonNamesResource[]> = of([]);

  public pagination: PokemonPagination = {
    offset: 0,
    limit: 9
  }

  constructor(
    private _pokemonService: PokemonsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paginate()
  }

  /**
   * Paginate records
   */
  paginate(): void {
    this.pokemonResources$ = this._pokemonService.pokemons(this.pagination).pipe(
      tap(response => this.total = response.count),
      map(response => response.results)
    )
  }

  /**
   * Change page
   */
  changePage(params: PokemonPagination){
    this.pagination = params;
    this.paginate()
  }

}
