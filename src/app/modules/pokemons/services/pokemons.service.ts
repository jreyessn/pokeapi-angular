import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { Pokemon, PokemonFlavorTextEntries, PokemonPagination, PokemonResource, PokemonSpecies } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private pokeApi = "https://pokeapi.co/api/v2/pokemon";

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Map parameters for instance @HttpParams
   * 
   * @param params Pagination parameters
   * @returns 
   */
  private mapHttpParams(params: PokemonPagination | any){
    let httpParams = new HttpParams;

    Object.keys(params).forEach((key) => {
      httpParams = httpParams.append(key, params[key])
    })

    return httpParams;
  }

  /**
   * Get pagination pokemons
   * 
   * @param params Pagination parameters
   * @returns 
   */
  pokemons(params: PokemonPagination) : Observable<PokemonResource> {
    const httpParams = this.mapHttpParams(params)

    return this.http.get<PokemonResource>(this.pokeApi, { params: httpParams }).pipe(
      switchMap((values: PokemonResource) => {
        
        const mappedDetails = values.results.map(record => this.pokemonPath(record.url))

        return forkJoin(mappedDetails).pipe(
          map((details: Pokemon[] | any[]) => {

            values.results = values.results.map((record, key) => {
              record.detail = details[key]
              return record
            })

            return values
          })
        )
      })
    )
  }

  /**
   * Obtiene un pokemon
   * 
   * @param id ID de pokemon
   */
  pokemon(id: string | null): Observable<Pokemon> {
    const path = this.pokeApi + '/' + id

    return this.pokemonPath(path).pipe(
      switchMap((value: Pokemon) => {

        return this.http.get(value.species.url).pipe(
          map((data: PokemonSpecies|any) => {
            value.description = data.flavor_text_entries.find((flavor: PokemonFlavorTextEntries) => flavor.language.name == "es")?.flavor_text ?? ''

            return value
          })
        )

      })
    )
  }

  /**
   * Get pokemon detail with path
   * 
   * @param path Path detail pokemon
   * @returns 
   */
  pokemonPath(path: string): Observable<Pokemon>{
    return <Observable<Pokemon>>this.http.get(path)
  }

}
