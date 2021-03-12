import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes,Resolve } from "@angular/router";
import { BikeListComponent } from "src/app/bikes/bike-list/bike-list.component";
import { BikeInfoComponent } from "src/app/bikes/bike-info/bike-info.component";
import { BikeCenterComponent } from "src/app/bikes/bike-center/bike-center.component";

const bikeCenterRouters: Routes = [
                        {path: '', component: BikeCenterComponent,
                            children: [
                                       {
                                         path: '',
                                         component: BikeListComponent,
                                         children: [
                                           {
                                             path: ':id',
                                             component: BikeInfoComponent,
                                   //          canDeactivate: [CanDeactivateGuard],
                                    //         resolve: {
                                   //            crisis: CrisisDetailResolverService
                                   //          }
                                           },
                               //            {path: '', component: BikeCenterComponent  }
                                         ]
                                       }
                                     ]    
                        
                        },  
               //         { path: 'bike-center', component: BikeListComponent},
               //         { path: 'bike-center/:id', component: BikeInfoComponent}
                      ];


@NgModule({
    imports : [ RouterModule.forChild(bikeCenterRouters)],
    exports : [RouterModule]  
 
})
export class BikesRoutingModule { }
