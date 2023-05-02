import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemons } from './pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  getPokemon(index: number) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemons>{
    return this.http.get<Pokemons>("https://pokeapi.co/api/v2/pokemon/{id}");
  }
}
