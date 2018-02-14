import { Component, OnInit } from '@angular/core';

// Local components
import { PlanetService } from './planet.service';
import { Planet } from './planet.class';
import { PlanetResponse} from './planetResponse.class';

// import {TableModule} from 'primeng/table';
import {DataTableModule} from 'primeng/datatable';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  planets: Planet[];
  cols: any[];
  public planets_error: any;

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.cols = [
      {field: 'name',  header: 'Name'},
      {field: 'rotation_period', header: 'Rotation period' },
      {field: 'orbital_period', header: 'Orbital period'},
      {field: 'diameter', header: 'Diameter'},
      {field: 'climate', header: 'Climate'},
      {field: 'gravity', header: 'Gravity'},
      {field: 'terrain', header: 'Terrain'},
      {field: 'surface_water', header: 'Surface water'},
      {field: 'population', header: 'Population'},
      {field: 'residents', header: 'Residents'},
      {field: 'films', header: 'Films'},
      {field: 'created', header: 'Created'},
      {field: 'edited', header: 'Edited'},
      {field: 'url', header: 'Url'}
    ];
    this.planetService.getPlanets$().subscribe(
      data => { this.planets = data.results; },
      err => { this.planets_error = true; }
    );
  }

}
