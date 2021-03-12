import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeListComponent } from './bike-list/bike-list.component';
import { BikeInfoComponent } from './bike-info/bike-info.component';
import { BikeCenterComponent } from './bike-center/bike-center.component';
import { BikesRoutingModule } from './bikes-routing.module';



@NgModule({
  declarations: [BikeListComponent, BikeInfoComponent, BikeCenterComponent],
  imports: [
    CommonModule,
    BikesRoutingModule
  ]
})
export class BikesModule { }
