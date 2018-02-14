import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Person } from './person.class';
import { PersonResponse } from './personResponse.class';

@Injectable()
export class PersonService {
  private swapiUrl = 'https://swapi.co/api';

  constructor(private http: HttpClient) { }
  /**
   *
   * Method to call the endpoint and recover all the people
   *
   * @returns {Observable<Person[]>}
   * @memberof PersonService
   */
  public getPeople$(): Observable<PersonResponse> {
    return this.http.get<PersonResponse>(this.swapiUrl + '/people');
  }

}
