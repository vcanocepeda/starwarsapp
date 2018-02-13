import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Local imports
import { PlanetRoutingModule } from './planet-routing.module';
import { PlanetComponent } from './planet.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { PlanetService } from './planet.service';

@NgModule({
  imports: [
    CommonModule,
    PlanetRoutingModule
  ],
  declarations: [PlanetComponent, PlanetDetailComponent],
  providers : [ PlanetService ]
})
export class PlanetModule { }
