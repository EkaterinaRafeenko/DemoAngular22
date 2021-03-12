import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";
import { BIKES } from "src/app/bikes/mock-bikes-list";
import { Bike } from "src/app/bikes/bike";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class BikeService {
    private bikes$: BehaviorSubject<Bike[]> = new BehaviorSubject<Bike[]>(BIKES);
private bikes: Bike[]=[];
    constructor() {
        this.bikes=BIKES;
    }
    getBikes(): Observable<Bike[]> { return of (BIKES); }
 //   getBikes() { return this.bikes$ }
    
    getBike(id: number | string): Observable<Bike> {
        return this.getBikes().pipe(
          map((bikes: Bike[]) => bikes.find(bike => bike.id === +id))
        );
        
   //     return this.bikes.find( p => p.id === id);
      }
}
