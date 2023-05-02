import { PokemonsService } from './../pokemons.service';
import { Component, OnInit } from '@angular/core';
import { Pokemons } from '../pokemons';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit{
  constructor(private PokemonsService: PokemonsService){}

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(): void {
    this.PokemonsService.getPokemons().subscribe(
      {
      next: pokemons => this.pokemons = pokemons
      }
    );
  }

  pokemons: Pokemons = {} as Pokemons;
}
