import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Local imports
import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { PersonService } from './person.service';

@NgModule({
  imports: [
    CommonModule,
    PersonRoutingModule
  ],
  declarations: [PersonComponent],
  providers : [ PersonService ]
})
export class PersonModule { }
