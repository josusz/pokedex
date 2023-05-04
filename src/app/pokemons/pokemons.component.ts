import { PokemonsService } from './../pokemons.service';
import { Component, OnInit } from '@angular/core';
import { Pokemons } from '../pokemons';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit{
  pokemon: Pokemons = {} as Pokemons;
  
  constructor(private pokemonService: PokemonsService){}

  ngOnInit(): void {
    this.loadPokemon(1);
  }

  loadPokemon(id: number): void {
    this.pokemonService.getPokemons(id).subscribe((pokemon) => {
      this.pokemon = pokemon;
    });
  }

  next(): void {
    this.loadPokemon(this.pokemon.id + 1);
  }

  previous(): void {
    this.loadPokemon(this.pokemon.id - 1);
  }
}
