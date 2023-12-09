import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  poxdexList: any;
  poxdexData: any;
  public pokedexListName = [];
  public allData: any[] = [];
  public searchTerm = '';
  public filteredData: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.pokedexList();
  }

  async pokedexList() {
    const TotalSpecies = await axios.get(
      'https://pokeapi.co/api/v2/pokemon-species'
    );
    this.poxdexData = TotalSpecies.data.results;
    console.log(this.poxdexData, 'poxdexDataName');
    this.pokedexListName = this.poxdexData.map((pokemon: any) => pokemon.name);
    console.log(this.pokedexListName, 'testName');

    for (const testName of this.pokedexListName) {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${testName}`
      );
      this.allData.push(response.data);
    }
    console.log(this.allData, 'allData');
   }

  onSearch() {
    console.log('Search term:', this.searchTerm);

    if (this.searchTerm) {
      this.filteredData = this.allData.filter((item) =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredData = [];
    }

    console.log(this.filteredData, 'filteredDatafilteredData');
  }

}
