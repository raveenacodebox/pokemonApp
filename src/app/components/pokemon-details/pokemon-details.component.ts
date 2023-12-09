import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import axios from 'axios';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  pokedexDetail: any;
  id: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.pokedexList();
    });
  }

  async pokedexList() {
    const TotalSpecies = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${this.id}`
    );
    this.pokedexDetail = TotalSpecies.data;
    console.log(this.pokedexDetail, 'poxdexDataName');
  }
}
