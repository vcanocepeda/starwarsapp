import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetComponent } from './planet.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetComponent
  },
  {
    path: ':id',
    component: PlanetDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetRoutingModule { }
