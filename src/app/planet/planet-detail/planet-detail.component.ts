import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetService } from '../planet.service';
import { Planet } from '../planet.class';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  _id: any;
  planet: Planet;
  public planets_error: any;

  constructor(private route: ActivatedRoute, private planetService: PlanetService) { }

  ngOnInit() {
    this._id = this.route.snapshot.params['id'];
    this.planetService.getPlanetDetail(this._id).subscribe(
      data => { this.planet = data; },
      err => { this.planets_error = true; }
    );
  }

}
