import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.items = [
        {label: 'Home', icon: 'fa-bar-chart', routerLink: ['/home'] },
        {label: 'Person', icon: 'fa-bar-chart', routerLink: ['/person'] },
        {label: 'Planets', icon: 'fa-calendar', routerLink: ['/planet']},
    ];
  }
}
