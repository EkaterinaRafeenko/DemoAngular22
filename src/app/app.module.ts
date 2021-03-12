import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
//import { BikeComponent } from './bike/bike.component';
//import { BikeInfoComponent } from './bike-info/bike-info.component';
import { AppRoutingModule } from './app-routing.module';
import { BikesModule } from './bikes/bikes.module';

@NgModule({
  declarations: [
    AppComponent,
//    BikeComponent,
//    BikeInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    AppRoutingModule, BikesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
