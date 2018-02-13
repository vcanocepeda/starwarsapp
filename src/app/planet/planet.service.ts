import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Planet } from './planet.class';
import { PlanetResponse } from './planetResponse.class';

@Injectable()
export class PlanetService {
  private swapiUrl = 'https://swapi.co/api';

  constructor(private http: HttpClient) { }
  /**
   *
   * Method to call the endpoint and recover all the countris and its code.
   *
   * @returns {Observable<Planet[]>}
   * @memberof PlanetService
   */
  public getPlanets$(): Observable<PlanetResponse> {
    return this.http.get<PlanetResponse>(this.swapiUrl + '/planets');
  }

}
