import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Local components
import { PlanetService } from './planet.service';
import { Planet } from './planet.class';
import { PlanetResponse} from './planetResponse.class';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';


@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  planets: Planet[];
  cols: any[];
  public planets_error: any;

  constructor(private _router: Router, private planetService: PlanetService) { }

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
      {field: 'population', header: 'Population'}
    ];
    this.planetService.getPlanets$().subscribe(
      data => { this.planets = data.results; },
      err => { this.planets_error = true; }
    );
  }

  goToDetail(url: String) {

  // We have to trim the url
  console.log('Id - ' + url);
    console.log ('Cortado - ' + url.split('/')[5]);
  //  console.log('Id - ' + rowData['url']);
  //  this._router.navigate(rowData['url']);
    this._router.navigate(['/planets/' + url.split('/')[5]]);
  }

  handleClick(e: any) {
    console.log('Event - ' + e.target.value);
  }

}
