import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemons } from './pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  constructor(private http: HttpClient) { }

  getPokemons(id: number): Observable<Pokemons>{
    return this.http.get<Pokemons>('https://pokeapi.co/api/v2/pokemon/'+ id);
  }

  getPokemonImageUrl(pokemonNumber: number): string {
    const paddedNumber = ('000' + pokemonNumber).slice(-3);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedNumber}.png`;
  }
}