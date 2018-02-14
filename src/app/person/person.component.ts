import { Component, OnInit } from '@angular/core';

// Local components
import { PersonService } from './person.service';
import { Person } from './person.class';
import { PersonResponse} from './personResponse.class';

import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  people: Person[];
  public people_error: any;

  constructor(private personService: PersonService) { }

  ngOnInit() {
   this.personService.getPeople$().subscribe(
      data => { this.people = data.results; },
      err => { this.people_error = true; }
    );
  }

}
