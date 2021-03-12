import { Component, OnInit, Input } from '@angular/core';

import { Bike } from '../bike';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { BikeService } from "src/app/bikes/bike.service";
import { Location } from '@angular/common';
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-bike-info',
  templateUrl: './bike-info.component.html',
  styleUrls: ['./bike-info.component.css']
})
export class BikeInfoComponent implements OnInit {
    bike$: Observable<Bike>;
 bike: Bike;
@Input() editModel: string;

  constructor(private service: BikeService,
          private route: ActivatedRoute,
          private router: Router,
          private location: Location
          
         ) { }

  ngOnInit() {
 //     let id = +this.route.snapshot.paramMap.get('id');
 //    console.log('ID : ' + id );
 //     this.bike = this.service.getBike(id);
      let id;
      this.route.paramMap.subscribe((paramMap) => {id = +paramMap.get('id'),
          this.service.getBike(id).subscribe(bike=>this.bike=bike);
      this.editModel =this.bike.model;  }
              
      );
      
 /*     console.log(id2);
      console.log(this.route.data);
      console.log(this.route.snapshot.paramMap);
      const id = +this.route.snapshot.paramMap.get('id');
      this.service.getBike(id).subscribe(bike=>this.bike=bike);
      this.editModel =this.bike.model;
  */    
   /*   this.route.data.subscribe((data: { bike: Bike }) => {
          this.editModel = data.bike.model;
          this.bike = data.bike;
          console.log(data.bike);
           } ); */
      
   /*       this.bike$ = this.route.paramMap.pipe(
                  switchMap((params: ParamMap) =>
                    this.service.getBike(params.get('id')))
          ); */  
              console.log('ID : '+ this.bike.id);
          
        }
  }

 

