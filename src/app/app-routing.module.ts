import { NgModule } from '@angular/core';
import {  BikeListComponent } from "src/app/bikes/bike-list/bike-list.component";
import { RouterModule, Routes } from '@angular/router';
import { BikeInfoComponent } from "src/app/bikes/bike-info/bike-info.component";

const routes: Routes = [
                  //      {path: '', component: BikeListComponent},
              //          {path: 'bikes', component: BikeListComponent},
                  { path: '',   redirectTo: '/bike-center', pathMatch: 'full' },    
                  {       path: 'bike-center',
                    //        component: BikeListComponent
                            loadChildren: () => import('./bikes/bikes.module').then(m => m.BikesModule),
                            data: { preload: true }
                          },
                        
                //        {path: 'bikes/:id', component: BikeInfoComponent}
                      ];

@NgModule({
    imports : [ RouterModule.forRoot(routes)],
    exports : [RouterModule]  
 
})
export class AppRoutingModule { }
