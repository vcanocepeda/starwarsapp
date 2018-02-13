import { Component, OnInit } from '@angular/core';

// Local components
import { PlanetService } from './planet.service';
import { Planet } from './planet.class';
import { PlanetResponse} from './planetResponse.class';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  planets: Planet[];
  public planets_error: any;

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.planetService.getPlanets$().subscribe(
      data => { this.planets = data.results; },
      err => { this.planets_error = true; }
    );
  }

}
