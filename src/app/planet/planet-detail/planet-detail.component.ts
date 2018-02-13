import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  _id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this._id = this.route.snapshot.params['id'];
  }

}
